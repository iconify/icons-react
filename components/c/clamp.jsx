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
		"content": `<style>.pbp9l8bxk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 3h10.75q1.25 0 1.25 1.25V5q0 1.25-1.25 1.25h-7.5Q8.5 6.25 8.5 7.5v7q0 1.25 1.25 1.25h7.5q1.25 0 1.25 1.25v.75q0 1.25-1.25 1.25H6.5q-1.25 0-1.25-1.25V4.25Q5.25 3 6.5 3m8.75 18.25v-10m-2.25 0h4.5m-4.75 10h5");
}
</style><path class="pbp9l8bxk"/>`,
		"fallback": "iconoven:clamp",
	});
}

export default Component;
