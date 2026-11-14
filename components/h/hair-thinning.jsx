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
		"content": `<style>.vf52lccad {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3C3.5 9 8.5 14 6 21m4.5-18C8 9 13 14 10.5 21M15 3c-2.5 5 2 6.5 0 10m3 1.5v7m-3-3l3 3l3-3");
}
</style><path class="vf52lccad"/>`,
		"fallback": "uix:hair-thinning",
	});
}

export default Component;
