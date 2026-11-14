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
		"content": `<style>.gjs46mcqn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 3.5V21M20 3.5V21M5.75 6.5h12.5A1.75 1.75 0 0 1 20 8.25v.5a1.75 1.75 0 0 1-1.75 1.75H5.75A1.75 1.75 0 0 1 4 8.75v-.5A1.75 1.75 0 0 1 5.75 6.5m0 8h12.5A1.75 1.75 0 0 1 20 16.25v.5a1.75 1.75 0 0 1-1.75 1.75H5.75A1.75 1.75 0 0 1 4 16.75v-.5a1.75 1.75 0 0 1 1.75-1.75");
}
</style><path class="gjs46mcqn"/>`,
		"fallback": "uix:hostel-bunk-bed",
	});
}

export default Component;
