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
		"content": `<style>.h4jrl1btl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 3.5h4a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3Zm2 0V10m-5 0h10");
}
</style><path class="h4jrl1btl"/>`,
		"fallback": "uix-sharp:category-computer-accessories",
	});
}

export default Component;
