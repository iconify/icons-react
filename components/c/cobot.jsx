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
		"content": `<style>.d0t7cr1wb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 21a4.5 4.5 0 0 1 9 0ZM8 16.5V7.75M9.75 6h5.5M17 7.75V13M6.25 6a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m9 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m-1 10.5V13h5.5v3.5");
}
</style><path class="d0t7cr1wb"/>`,
		"fallback": "uix:cobot",
	});
}

export default Component;
