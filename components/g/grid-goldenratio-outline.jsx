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
		"content": `<style>.gcor9u8nx {
  fill: currentColor;
  d: path("M10 21v-7H3v-1h7v-2H3v-1h7V3h1v7h2V3h1v7h7v1h-7v2h7v1h-7v7h-1v-7h-2v7zm1-8h2v-2h-2z");
}
</style><path class="gcor9u8nx"/>`,
		"fallback": "material-symbols-light:grid-goldenratio-outline",
	});
}

export default Component;
