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
		"content": `<style>.z-6dbpbln {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 20.5v-4c0-3.5 5-3.5 5-7m5 11v-4c0-3.5-5-3.5-5-7m0 0v-6M8.5 7L12 3.5L15.5 7");
}
</style><path class="z-6dbpbln"/>`,
		"fallback": "uix:arrow-merge-up",
	});
}

export default Component;
