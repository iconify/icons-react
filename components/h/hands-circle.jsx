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
		"content": `<style>.bv_6klbtn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.25 4.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M8.5 12a3.5 3 0 0 1 7 0M3.25 14.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m14 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M2 21.5a3 2.5 0 0 1 6 0h8a3 2.5 0 0 1 6 0");
}
</style><path class="bv_6klbtn"/>`,
		"fallback": "uix:hands-circle",
	});
}

export default Component;
