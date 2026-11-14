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
		"content": `<style>.uamzpdbea {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4h18M5 4v6a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4M7.5 20.75Q7 18 9 16.5q.5 1.75 1.5 2.25q.5-1.75 1.5-3q1 1.25 1.5 3q1-.5 1.5-2.25q2 1.5 1.5 4.25Z");
}
</style><path class="uamzpdbea"/>`,
		"fallback": "uix:camp-cooking",
	});
}

export default Component;
