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
		"content": `<style>.r5u3q1igf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 6.036za2 2 0 0 1 2.732.732l2 3.464a2 2 0 0 1-.732 2.732a2 2 0 0 1-2.732-.732l-2-3.464A2 2 0 0 1 5.5 6.036M9.25 8.5l8.75-5m-13.75 14h5.5a1.75 1.75 0 0 1 1.75 1.75A1.75 1.75 0 0 1 9.75 21h-5.5a1.75 1.75 0 0 1-1.75-1.75a1.75 1.75 0 0 1 1.75-1.75m10.5.5l2 2L21 15.75");
}
</style><path class="r5u3q1igf"/>`,
		"fallback": "uix:guilty-plea",
	});
}

export default Component;
