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
		"content": `<style>.u1awk0blb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 8.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m7 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m7 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M2.5 18v-2.5a2.5 2.5 0 0 1 5 0V18m2 0v-2.5a2.5 2.5 0 0 1 5 0V18m2 0v-2.5a2.5 2.5 0 0 1 5 0V18m-19 3h19");
}
</style><path class="u1awk0blb"/>`,
		"fallback": "uix:checkout-queue-long",
	});
}

export default Component;
