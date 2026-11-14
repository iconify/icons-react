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
		"content": `<style>.np-jamp6y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 20.5V10a7 7 0 0 1 14 0v10.5q-1.75-2-3.5 0t-3.5 0t-3.5 0t-3.5 0m4.5-10h.01m4.99 0h.01");
}
</style><path class="np-jamp6y"/>`,
		"fallback": "uix:genre-horror",
	});
}

export default Component;
