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
		"content": `<style>.j84uq_6bm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9h19c0 6-4.5 10-9.5 10S2.5 15 2.5 9m2.25-4h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 5.75 9h-1a1.5 1.5 0 0 1-1.5-1.5v-1A1.5 1.5 0 0 1 4.75 5m6.75 0h1A1.5 1.5 0 0 1 14 6.5v1A1.5 1.5 0 0 1 12.5 9h-1A1.5 1.5 0 0 1 10 7.5v-1A1.5 1.5 0 0 1 11.5 5m6.75 0h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1a1.5 1.5 0 0 1 1.5-1.5");
}
</style><path class="j84uq_6bm"/>`,
		"fallback": "uix:cereal-bowl",
	});
}

export default Component;
