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
		"content": `<style>.y685mub8g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.162 3h10.202a1.75 1.75 0 0 1 1.613 2.429l-2.526 6a1.75 1.75 0 0 1-1.613 1.071H5.636a1.75 1.75 0 0 1-1.613-2.429l2.526-6A1.75 1.75 0 0 1 8.162 3M5 7.75h14M14 3l-4 9.5m-7 4q2.25-2 4.5 0t4.5 0t4.5 0t4.5 0m-18 4q2.25-2 4.5 0t4.5 0t4.5 0t4.5 0");
}
</style><path class="y685mub8g"/>`,
		"fallback": "uix:floating-solar",
	});
}

export default Component;
