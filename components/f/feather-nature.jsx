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
		"content": `<style>.hsr_aj0jz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M20.5 3.5C21 11 15.5 16.5 7 17c0-4 1.5-6.5 3.5-8l2.5.5l-1-2c2.5-2.5 5.5-3.75 8.5-4m-17 17l13-13");
}
</style><path class="hsr_aj0jz"/>`,
		"fallback": "uix:feather-nature",
	});
}

export default Component;
