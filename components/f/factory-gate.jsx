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
		"content": `<style>.c5ifepbot {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 11h.5a1.75 1.75 0 0 1 1.75 1.75v6a1.75 1.75 0 0 1-1.75 1.75h-.5a1.75 1.75 0 0 1-1.75-1.75v-6A1.75 1.75 0 0 1 5.25 11m2.799-1.049l8.66-5a1.5 1.5 0 0 1 2.049.549a1.5 1.5 0 0 1-.549 2.049l-8.66 5A1.5 1.5 0 0 1 7.5 12a1.5 1.5 0 0 1 .549-2.049m2.382-1.375l1.5 2.598m2.18-4.723l1.5 2.598");
}
</style><path class="c5ifepbot"/>`,
		"fallback": "uix:factory-gate",
	});
}

export default Component;
