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
		"content": `<style>.avwm4ybhv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3h8L13 6.5L11.5 9l2 2.5h-11ZM3 15.5q2.25-2 4.5 0t4.5 0t4.5 0t4.5 0M3 20.25q2.25-2 4.5 0t4.5 0t4.5 0t4.5 0");
}
</style><path class="avwm4ybhv"/>`,
		"fallback": "uix:coasteering",
	});
}

export default Component;
