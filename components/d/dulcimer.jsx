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
		"content": `<style>.turn8fk_w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.298 19.5h13.404a1.75 1.75 0 0 0 1.687-2.215l-3.035-11A1.75 1.75 0 0 0 15.667 5H8.333a1.75 1.75 0 0 0-1.687 1.285l-3.035 11A1.75 1.75 0 0 0 5.298 19.5M9 3v16.5M12 3v16.5M15 3v16.5");
}
</style><path class="turn8fk_w"/>`,
		"fallback": "uix:dulcimer",
	});
}

export default Component;
