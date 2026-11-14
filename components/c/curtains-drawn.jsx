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
		"content": `<style>.rgst1gblr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5h19m-18 0h6Q8.5 10 6 12q2 4 2.5 8.5h-5Zm17 0h-6q1 6.5 3.5 8.5q-2 4-2.5 8.5h5ZM12 7v10m-2.5-5h5");
}
</style><path class="rgst1gblr"/>`,
		"fallback": "uix:curtains-drawn",
	});
}

export default Component;
