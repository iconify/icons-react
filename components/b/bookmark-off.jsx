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
		"content": `<style>.rpk1uebvb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.9 3H18v11.1m-3.6 4.2L12 16.5L6 21V9.9M3.5 3.5l17 17");
}
</style><path class="rpk1uebvb"/>`,
		"fallback": "uix-sharp:bookmark-off",
	});
}

export default Component;
