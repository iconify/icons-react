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
		"content": `<style>.b3fbrb88k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 16c0-2.5-3-4-3-7.5a5.5 5.5 0 0 1 11 0c0 3.5-3 5-3 7.5Zm.75 3h3.5M18 14.5V21m-2.75-2.75L18 21l2.75-2.75");
}
</style><path class="b3fbrb88k"/>`,
		"fallback": "uix:brownout",
	});
}

export default Component;
