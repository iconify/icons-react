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
		"content": `<style>.glrw90i0k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4 3l5.5 11h7l3.5 3.5M9.5 14L6 21m10.5-7l2 7");
}
</style><path class="glrw90i0k"/>`,
		"fallback": "uix:beach-chair",
	});
}

export default Component;
