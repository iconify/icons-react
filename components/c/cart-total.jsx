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
		"content": `<style>.zaiwdvo8m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 2.5h14V21l-2.5-1.75L14 21l-2.5-1.75L9 21l-1.5-1L5 21ZM8.5 6h7m-7 3H13m-4.5 3.5h7m-7 3.25h7");
}
</style><path class="zaiwdvo8m"/>`,
		"fallback": "uix-sharp:cart-total",
	});
}

export default Component;
