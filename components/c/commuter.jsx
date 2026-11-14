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
		"content": `<style>.q5j4cdk3c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 7.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0M4 21c0-4 3.5-6.5 8-6.5q.817 0 1.583.108M8 15l4.743 1.581M17.25 15.5h2.5a1.75 1.75 0 0 1 1.75 1.75v2A1.75 1.75 0 0 1 19.75 21h-2.5a1.75 1.75 0 0 1-1.75-1.75v-2a1.75 1.75 0 0 1 1.75-1.75");
}
</style><path class="q5j4cdk3c"/>`,
		"fallback": "uix:commuter",
	});
}

export default Component;
