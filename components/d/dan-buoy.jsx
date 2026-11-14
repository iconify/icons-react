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
		"content": `<style>.d6sbpw0fy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 18a6 3.5 0 1 0 12 0a6 3.5 0 1 0-12 0m6-15.5v12m2.038-11.216l1.212.466a1.339 1.339 0 0 1 0 2.5l-1.212.466A1.5 1.5 0 0 1 12 5.316v-.632a1.5 1.5 0 0 1 2.038-1.4");
}
</style><path class="d6sbpw0fy"/>`,
		"fallback": "uix:dan-buoy",
	});
}

export default Component;
