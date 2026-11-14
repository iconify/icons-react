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
		"content": `<style>.b869uhxrs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16 4c-1-1-2.25-1.25-3.25-.75S11.25 4.75 11 6L9 18c-.25 1.25-.75 2.25-1.75 2.75S5 21 4 20M7.5 9.5h6M16.75 8c-2.5 3-2.5 10 0 13m2.5-13c2.5 3 2.5 10 0 13");
}
</style><path class="b869uhxrs"/>`,
		"fallback": "uix:function",
	});
}

export default Component;
