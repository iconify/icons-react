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
		"content": `<style>.tuabmqryk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.158 4.996l4.926 2.016A.923.923 0 0 1 12 8.75l-1.692.507a1.75 1.75 0 0 0-1.121 1.027L8.5 12a1.028 1.028 0 0 1-1.92-.03L4.851 7.214a1.75 1.75 0 0 1 2.307-2.218M15.75 15.5c0-1.1.95-1.75 2-1.75c1.15 0 2 .75 2 1.75c0 1.4-2 1.6-2 2.75m0 2.75h.01");
}
</style><path class="tuabmqryk"/>`,
		"fallback": "uix:cursor-help",
	});
}

export default Component;
