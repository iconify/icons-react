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
		"content": `<style>.qa7eu0l5u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 12q3-3.5 6 0q-3 3.5-6 0m6-4q3-3.5 6 0q-3 3.5-6 0m6 4q3-3.5 6 0q-3 3.5-6 0M2.5 17.5q2.25-1.5 4.75 0t4.75 0t4.75 0t4.75 0");
}
</style><path class="qa7eu0l5u"/>`,
		"fallback": "uix:duckweed",
	});
}

export default Component;
