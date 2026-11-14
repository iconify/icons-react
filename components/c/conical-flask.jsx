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
		"content": `<style>.dd2vrwufc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 3v6.25l-5.25 9.5C4.25 19.9 4.9 21 6.2 21h11.6c1.3 0 1.95-1.1 1.45-2.25L14 9.25V3M9 3h6M7.75 15.5h8.5");
}
</style><path class="dd2vrwufc"/>`,
		"fallback": "uix:conical-flask",
	});
}

export default Component;
