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
		"content": `<style>.e890jlbaq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12h19l-2 3.75h-15Zm4 0l-2-4.5q7.5-6 15 0l-2 4.5m-15 7.25q2.375-1.25 4.75 0t4.75 0t4.75 0t4.75 0");
}
</style><path class="e890jlbaq"/>`,
		"fallback": "uix:hopper-barge",
	});
}

export default Component;
