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
		"content": `<style>.pnmxyib3l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 19.5v-15h5c2.5 0 4 1.5 4 4s-1.5 4-4 4H8m4.75 0l4.25 7");
}
</style><path class="pnmxyib3l"/>`,
		"fallback": "uix-sharp:currency-rand",
	});
}

export default Component;
