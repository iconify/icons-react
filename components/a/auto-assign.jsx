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
		"content": `<style>.nlbvn-ogo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.672 20.5H4c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5q.811 0 1.567.106M6.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0m11 14.5v-3m0 0l-3-3m3 3l3-3m-2 0h2v2");
}
</style><path class="nlbvn-ogo"/>`,
		"fallback": "uix:auto-assign",
	});
}

export default Component;
