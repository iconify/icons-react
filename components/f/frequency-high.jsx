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
		"content": `<style>.ml078gk4z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 10.5q1.5-10.125 3 0t3 0t3 0t3 0t3 0t3 0m-18 8h18");
}
</style><path class="ml078gk4z"/>`,
		"fallback": "uix:frequency-high",
	});
}

export default Component;
