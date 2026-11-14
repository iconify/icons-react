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
		"content": `<style>.sf2w45x1n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 7a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0M3 20.5c0-3.75 3.25-6 7-6c1.541 0 2.887.31 4.04.794M14.75 18l2 2L21 15.75");
}
</style><path class="sf2w45x1n"/>`,
		"fallback": "uix:contact-opt-in",
	});
}

export default Component;
