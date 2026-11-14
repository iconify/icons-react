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
		"content": `<style>.zymkl6bda {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 5h8A2.25 2.25 0 0 1 15 7.25a2.25 2.25 0 0 1-2.25 2.25h-8A2.25 2.25 0 0 1 2.5 7.25A2.25 2.25 0 0 1 4.75 5m6.5 9.5h8a2.25 2.25 0 0 1 2.25 2.25A2.25 2.25 0 0 1 19.25 19h-8A2.25 2.25 0 0 1 9 16.75a2.25 2.25 0 0 1 2.25-2.25");
}
</style><path class="zymkl6bda"/>`,
		"fallback": "uix:gantt-lead",
	});
}

export default Component;
