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
		"content": `<style>.mea4i3b3s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 4.5h11m-11 4h11m-7.5-4c2.6 0 4 1.7 4 4s-1.4 4-4 4H6.5l8.5 7");
}
</style><path class="mea4i3b3s"/>`,
		"fallback": "uix:currency-rupee",
	});
}

export default Component;
