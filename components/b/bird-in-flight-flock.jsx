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
		"content": `<style>.qm95oxbhj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9c1.75-2 4.25-2 6 .5c1.75-2.5 4.25-2.5 6-.5m-.5 7c1.25-1.25 2.75-1.25 4 .5c1.25-1.75 2.75-1.75 3.5-.75m-16 1.75c1-1 2.25-1 3.25.25c1-1.25 2.25-1.25 3.25-.25");
}
</style><path class="qm95oxbhj"/>`,
		"fallback": "uix:bird-in-flight-flock",
	});
}

export default Component;
