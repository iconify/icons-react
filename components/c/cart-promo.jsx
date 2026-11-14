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
		"content": `<style>.lsu1rqj2a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h2L6.75 12H17.5l2.25-6.5H5.25m0 11a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm5 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm4.5 4.75l6.5-6.5m-5.75.75h.01m4.99 5h.01");
}
</style><path class="lsu1rqj2a"/>`,
		"fallback": "uix-sharp:cart-promo",
	});
}

export default Component;
