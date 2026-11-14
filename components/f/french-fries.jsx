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
		"content": `<style>.d11-udb3r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 10.5h14l-2 10H7Zm3 0v-6m2.75 6v-7m2.75 7v-7m2.75 7V5");
}
</style><path class="d11-udb3r"/>`,
		"fallback": "uix:french-fries",
	});
}

export default Component;
