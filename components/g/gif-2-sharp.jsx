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
		"content": `<style>.sg261ubsn {
  fill: currentColor;
  d: path("M2 17V7h8v2H4v6h4v-2H6v-2h4v6zm10 0V7h2v10zm4 0V7h7v2h-5v2h4v2h-4v4z");
}
</style><path class="sg261ubsn"/>`,
		"fallback": "material-symbols:gif-2-sharp",
	});
}

export default Component;
