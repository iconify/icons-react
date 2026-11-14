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
		"content": `<style>.paqcexbmc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 7.5c2.5-3.75 8.5-4 11.5-1l4-2.5v7l-4-2.5c-3 3-9 2.75-11.5-1m-1 12q2.25-2 4.5 0t4.5 0t4.5 0t4.5 0m-9-7V16m-1.75-1.75L12 16l1.75-1.75");
}
</style><path class="paqcexbmc"/>`,
		"fallback": "uix:catch-and-release",
	});
}

export default Component;
