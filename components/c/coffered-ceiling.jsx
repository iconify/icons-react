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
		"content": `<style>.fdt0ez5mi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.207 4h9.586a1.5 1.5 0 0 1 1.465 1.179l2.844 13A1.5 1.5 0 0 1 19.636 20H4.364a1.5 1.5 0 0 1-1.466-1.821l2.844-13A1.5 1.5 0 0 1 7.207 4M10 4L8.75 20M14 4l1.25 16M5 8.5h14m-15 5h16");
}
</style><path class="fdt0ez5mi"/>`,
		"fallback": "uix:coffered-ceiling",
	});
}

export default Component;
