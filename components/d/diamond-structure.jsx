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
		"content": `<style>.muqrc_bsf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 9.25V5.5m-2 7l-4.5 2.25M14 12.5l4.5 2.25m-6-1l.75 4.5m-3.5-6.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m.5-7.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m-8 11.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m16 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m-6.5 4.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}
</style><path class="muqrc_bsf"/>`,
		"fallback": "uix:diamond-structure",
	});
}

export default Component;
