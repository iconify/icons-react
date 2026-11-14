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
		"content": `<style>.ojajhytka {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.375 2.5h7.398a1.75 1.75 0 0 1 1.701 2.164l-3.649 15a1.75 1.75 0 0 1-1.7 1.336H6.727a1.75 1.75 0 0 1-1.701-2.164l3.649-15a1.75 1.75 0 0 1 1.7-1.336M2.5 21h19M10.75 7.5h5m-7.25 9h5m-4-4.5h.01M14 12h.01");
}
</style><path class="ojajhytka"/>`,
		"fallback": "uix:campus-board",
	});
}

export default Component;
