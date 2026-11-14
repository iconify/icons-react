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
		"content": `<style>.zaetuc9fb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 13.5V5a2.5 2.5 0 0 1 5 0v8.5a4.25 4.25 0 1 1-5 0m12 7v-17m-3 3l3-3l3 3M8 9.5v7");
}
</style><path class="zaetuc9fb"/>`,
		"fallback": "uix:heating-boost",
	});
}

export default Component;
