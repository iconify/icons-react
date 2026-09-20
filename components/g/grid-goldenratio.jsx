import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.p7h6winbq {
  fill: currentColor;
  d: path("M9 22v-7H2v-2h7v-2H2V9h7V2h2v7h2V2h2v7h7v2h-7v2h7v2h-7v7h-2v-7h-2v7zm2-9h2v-2h-2z");
}
</style><path class="p7h6winbq"/>`,
		"fallback": "material-symbols:grid-goldenratio",
	});
}

export default Component;
