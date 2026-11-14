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
		"content": `<style>.dr51sksze {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 3.5V9l-5 9.5q-1 2 1.25 2h7.531m2.286-7.573L14 9V3.5m-5.5 0h7M18 15v6m-3-3h6");
}
</style><path class="dr51sksze"/>`,
		"fallback": "uix:flask-plus",
	});
}

export default Component;
