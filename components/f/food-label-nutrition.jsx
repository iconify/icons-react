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
		"content": `<style>.nyaegofku {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 3.5h8A3.5 3.5 0 0 1 19.5 7v10a3.5 3.5 0 0 1-3.5 3.5H8A3.5 3.5 0 0 1 4.5 17V7A3.5 3.5 0 0 1 8 3.5m0 4h8M8 11h8m-8 3.5h5");
}
</style><path class="nyaegofku"/>`,
		"fallback": "uix:food-label-nutrition",
	});
}

export default Component;
