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
		"content": `<style>.tcv78_h_u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M18.5 15.5a7.5 7.5 0 1 1-9-9.5a6 6 0 0 0 9 9.5M15.5 3H20l-4.5 4.5H20");
}
</style><path class="tcv78_h_u"/>`,
		"fallback": "uix:bedtime",
	});
}

export default Component;
