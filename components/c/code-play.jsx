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
		"content": `<style>.b9qaf3b9u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3L2.5 7L6 11m8-8l3.5 4l-3.5 4m-3-8l-2 8m7.574 4.373l2.031 1.083a1.75 1.75 0 0 1 0 3.088l-2.031 1.083A1.75 1.75 0 0 1 14 19.083v-2.166a1.75 1.75 0 0 1 2.574-1.544");
}
</style><path class="b9qaf3b9u"/>`,
		"fallback": "uix:code-play",
	});
}

export default Component;
