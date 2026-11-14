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
		"content": `<style>.wjs6j-zci {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 12a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0M2.5 21c0-2.25 1.75-3.5 4-3.5s4 1.25 4 3.5m4.25-9a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0m-1.25 9c0-2.25 1.75-3.5 4-3.5s4 1.25 4 3.5M6.5 6.5c2-3.5 9-3.5 11 0m-2.75-1l2.75 1l.5-3");
}
</style><path class="wjs6j-zci"/>`,
		"fallback": "uix:incident-handoff",
	});
}

export default Component;
