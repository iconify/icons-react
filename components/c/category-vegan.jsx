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
		"content": `<style>.pip0k_bkd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.25 7.25c1.5-1.5 2.75-.75 5 1c2 1.75 3 3 1.5 4.5l-11.25 7Zm3.815-.044l1.36-4.733m-.211 5.697l3.214-3.83m-2.065 4.794l4.425-2.162");
}
</style><path class="pip0k_bkd"/>`,
		"fallback": "uix-sharp:category-vegan",
	});
}

export default Component;
