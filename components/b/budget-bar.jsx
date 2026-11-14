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
		"content": `<style>.hpxt1hboi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3v18M8.25 4h10.5a1.75 1.75 0 0 1 1.75 1.75a1.75 1.75 0 0 1-1.75 1.75H8.25A1.75 1.75 0 0 1 6.5 5.75A1.75 1.75 0 0 1 8.25 4m0 6.25h5.5A1.75 1.75 0 0 1 15.5 12a1.75 1.75 0 0 1-1.75 1.75h-5.5A1.75 1.75 0 0 1 6.5 12a1.75 1.75 0 0 1 1.75-1.75m0 6.25h8.5a1.75 1.75 0 0 1 1.75 1.75A1.75 1.75 0 0 1 16.75 20h-8.5a1.75 1.75 0 0 1-1.75-1.75a1.75 1.75 0 0 1 1.75-1.75");
}
</style><path class="hpxt1hboi"/>`,
		"fallback": "uix:budget-bar",
	});
}

export default Component;
