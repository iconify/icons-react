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
		"content": `<style>.ycrqdbcjz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 2.5h7M8 2.5v8l5 5.25m5.875-1.25l-.006-.01a1.75 1.75 0 0 0-2.371-.643l-6.735 3.8A1.71 1.71 0 0 0 9.125 20l.006.01a1.75 1.75 0 0 0 2.371.643l6.735-3.8a1.71 1.71 0 0 0 .638-2.353");
}
</style><path class="ycrqdbcjz"/>`,
		"fallback": "uix:brake-pedal",
	});
}

export default Component;
