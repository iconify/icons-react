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
		"content": `<style>.u_mgnv88a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 12c-2.75 0-3-3.5-1.5-4.5c-.5-3 1.5-5 3.75-5s4.25 2 3.75 5c1.5 1 1.25 4.5-1.5 4.5Zm.5 0v9.5m3.5-9.5v9.5m-3.5-7H12m1.75 2.5H12m-1.75 2.5H12");
}
</style><path class="u_mgnv88a"/>`,
		"fallback": "uix:birch-tree",
	});
}

export default Component;
