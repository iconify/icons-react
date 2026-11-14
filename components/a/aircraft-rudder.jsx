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
		"content": `<style>.p4g8rmbth {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.825 13.444l5.185-10a1.75 1.75 0 0 1 1.554-.944h1.186a1.75 1.75 0 0 1 1.75 1.75v10A1.75 1.75 0 0 1 11.75 16H5.379a1.75 1.75 0 0 1-1.554-2.556M10.5 2.5V16m4.75 3h6.25m-4.25-2l-2 2l2 2m2.25-4l2 2l-2 2");
}
</style><path class="p4g8rmbth"/>`,
		"fallback": "uix:aircraft-rudder",
	});
}

export default Component;
