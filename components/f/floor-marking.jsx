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
		"content": `<style>.vrqar-dtz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.326 4h7.348a1.75 1.75 0 0 1 1.685 1.276l3.516 12.5A1.75 1.75 0 0 1 19.19 20H4.81a1.75 1.75 0 0 1-1.685-2.224l3.516-12.5A1.75 1.75 0 0 1 8.326 4M10 7L8 17m6-10l2 10");
}
</style><path class="vrqar-dtz"/>`,
		"fallback": "uix:floor-marking",
	});
}

export default Component;
