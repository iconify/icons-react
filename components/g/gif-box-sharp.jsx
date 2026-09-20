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
		"content": `<style>.mc0d57s6d {
  fill: currentColor;
  d: path("M3 21V3h18v18zm8-6h1.5V9H11zm-5 0h4v-3H8.5v1.5h-1v-3H10V9H6zm8 0h1.5v-2h2v-1.5h-2v-1h3V9H14z");
}
</style><path class="mc0d57s6d"/>`,
		"fallback": "material-symbols:gif-box-sharp",
	});
}

export default Component;
