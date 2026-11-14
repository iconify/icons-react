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
		"content": `<style>.sma9m1bro {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 2.5H7C7 6 6 8 4 9v12h16V9c-2-1-3-3-3-6.5h-2L12 8zM12 8v13m-8-7.5h16m-16 4h16");
}
</style><path class="sma9m1bro"/>`,
		"fallback": "uix:high-vis-vest",
	});
}

export default Component;
