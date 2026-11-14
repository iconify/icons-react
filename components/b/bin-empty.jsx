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
		"content": `<style>.tfyuwdbvm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 9.5h14.5M6 9.5l1.25 10h9.5L18 9.5M5.75 6.75L5.5 5.5l12.5-3l.5 1.25M7.5 19.5a1.75 1.75 0 0 0 3.5 0m2 0a1.75 1.75 0 0 0 3.5 0");
}
</style><path class="tfyuwdbvm"/>`,
		"fallback": "uix:bin-empty",
	});
}

export default Component;
