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
		"content": `<style>.e_otryuge {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m13 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0m-7 0h2m3 0h2m3.832 9.068l1.032 1.992a1.5 1.5 0 0 1-1.331 2.19h-2.066a1.5 1.5 0 0 1-1.331-2.19l1.032-1.992a1.5 1.5 0 0 1 2.664 0M18 18.25h.01");
}
</style><path class="e_otryuge"/>`,
		"fallback": "uix:dependency-at-risk",
	});
}

export default Component;
