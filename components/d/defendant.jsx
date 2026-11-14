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
		"content": `<style>.cxzzouuar {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 7a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0M2.5 21c0-4 3-6.5 6.5-6.5c2.069 0 3.963.874 5.166 2.414M19 14.232L20.768 16a1.25 1.25 0 0 1 0 1.768a1.25 1.25 0 0 1-1.768 0L17.232 16a1.25 1.25 0 0 1 0-1.768a1.25 1.25 0 0 1 1.768 0M18 17l-3.25 3.25");
}
</style><path class="cxzzouuar"/>`,
		"fallback": "uix:defendant",
	});
}

export default Component;
