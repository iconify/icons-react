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
		"content": `<style>.pvd_lsu9h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.388 9.216l5.875-5.184a2.625 2.625 0 0 1 3.474 0l5.875 5.184a2.63 2.63 0 0 1 .888 1.969v7.69a2.625 2.625 0 0 1-2.625 2.625H6.125A2.625 2.625 0 0 1 3.5 18.875v-7.69a2.63 2.63 0 0 1 .888-1.969M3.5 13.75h17m-17 4h17");
}
</style><path class="pvd_lsu9h"/>`,
		"fallback": "uix:home-floors",
	});
}

export default Component;
