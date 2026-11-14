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
		"content": `<style>.wp4cpkvye {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 3.5h16M9 9l1.5-5.5M15 9l-1.5-5.5M9.748 9h4.504a1.5 1.5 0 0 1 1.482 1.728l-1.038 6.75a1.5 1.5 0 0 1-1.483 1.272h-2.426a1.5 1.5 0 0 1-1.483-1.272l-1.038-6.75A1.5 1.5 0 0 1 9.748 9M5.5 21.5h13");
}
</style><path class="wp4cpkvye"/>`,
		"fallback": "uix:bulb-planter",
	});
}

export default Component;
