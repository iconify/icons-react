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
		"content": `<style>.p5h5g836w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 9h3a1.5 1.5 0 0 1 1.5 1.5v3A1.5 1.5 0 0 1 7 15H4a1.5 1.5 0 0 1-1.5-1.5v-3A1.5 1.5 0 0 1 4 9m1.5 0v6m-3-3h6m2.75 0h2.5m0 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m5 0h2.75");
}
</style><path class="p5h5g836w"/>`,
		"fallback": "uix:colour-alpha-slider",
	});
}

export default Component;
