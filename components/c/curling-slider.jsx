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
		"content": `<style>.z1bs7vbsr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 14V7a2 2 0 0 1 2-2h3.5l2 4l7 1.5c2 .5 3 1.5 3 3.5Zm1.25 2.5h15a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 19.5 19h-15a1.25 1.25 0 0 1-1.25-1.25A1.25 1.25 0 0 1 4.5 16.5");
}
</style><path class="z1bs7vbsr"/>`,
		"fallback": "uix:curling-slider",
	});
}

export default Component;
