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
		"content": `<style>.egtolcbsv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 3h2A1.75 1.75 0 0 1 8 4.75v2A1.75 1.75 0 0 1 6.25 8.5h-2A1.75 1.75 0 0 1 2.5 6.75v-2A1.75 1.75 0 0 1 4.25 3m13.5 0h2a1.75 1.75 0 0 1 1.75 1.75v2a1.75 1.75 0 0 1-1.75 1.75h-2A1.75 1.75 0 0 1 16 6.75v-2A1.75 1.75 0 0 1 17.75 3M11 15.5h2a1.75 1.75 0 0 1 1.75 1.75v2A1.75 1.75 0 0 1 13 21h-2a1.75 1.75 0 0 1-1.75-1.75v-2A1.75 1.75 0 0 1 11 15.5M8 5.75h8M6.5 8.5l4 7m7-7l-4 7");
}
</style><path class="egtolcbsv"/>`,
		"fallback": "uix:adjacency-diagram",
	});
}

export default Component;
