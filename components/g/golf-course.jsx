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
		"content": `<style>.svr2dzb0z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 3.5V19m2.027-14.74l2.228.836a1.5 1.5 0 0 1 0 2.808l-2.228.836A1.5 1.5 0 0 1 9 7.335v-1.67a1.5 1.5 0 0 1 2.027-1.405M3.5 20.5c2.5-2 8.5-2 11 0");
}
</style><path class="svr2dzb0z"/>`,
		"fallback": "uix:golf-course",
	});
}

export default Component;
