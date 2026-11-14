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
		"content": `<style>.tkg53fbct {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 10h16.5L17 15.5H5.5A1.5 1.5 0 0 1 4 14Zm6.5 0V3.5l6 6.5m-9 5.5v5m7-5v5M3 20.5h18");
}
</style><path class="tkg53fbct"/>`,
		"fallback": "uix:boatyard",
	});
}

export default Component;
