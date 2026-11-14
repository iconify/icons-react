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
		"content": `<style>.w6w3tih2i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.5 7.5l2.5 2h5a3.5 3.5 0 1 1 6.25-2l3.25.75l-3 1.5c1.5.75 2 1.75 2 2.75c0 2-2 2.5-4 2.5H8q-4.5 0-4.5-7.5M14 6h.01M3 18q2.25-.75 4.5 0t4.5 0t4.5 0t4.5 0M5 20.75q2.25-.75 4.5 0t4.5 0t4.5 0");
}
</style><path class="w6w3tih2i"/>`,
		"fallback": "uix:charity-duck-race",
	});
}

export default Component;
