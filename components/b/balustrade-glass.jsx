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
		"content": `<style>.q1tsormeb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 21v-2.5h6v-3h6v-3h6V21ZM5.868 8.597l11-5.107A1.5 1.5 0 0 1 19 4.85v1.693a1.5 1.5 0 0 1-.868 1.36l-11 5.107A1.5 1.5 0 0 1 5 11.65V9.957a1.5 1.5 0 0 1 .868-1.36M5 14v4.5m14-11v5");
}
</style><path class="q1tsormeb"/>`,
		"fallback": "uix:balustrade-glass",
	});
}

export default Component;
