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
		"content": `<style>.yldz57buk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 10h19L20 21.5H4Zm7 0V7.5c0-1 1.25-1.5 1.25-2.5V2.5h2.5V5c0 1 1.25 1.5 1.25 2.5V10m-8.75 3.5h3m6.5 0h3");
}
</style><path class="yldz57buk"/>`,
		"fallback": "uix-sharp:grocery-delivery-crate",
	});
}

export default Component;
