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
		"content": `<style>.iwdlb0f_x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 4h7A3.5 3.5 0 0 1 19 7.5v10a3.5 3.5 0 0 1-3.5 3.5h-7A3.5 3.5 0 0 1 5 17.5v-10A3.5 3.5 0 0 1 8.5 4M11 2h2a1 1 0 0 1 1 1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1a1 1 0 0 1 1-1M5 8h14M5 17h14");
}
</style><path class="iwdlb0f_x"/>`,
		"fallback": "uix:beer-keg",
	});
}

export default Component;
