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
		"content": `<style>.ylds_wbdx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.207 4h9.586a1.5 1.5 0 0 1 1.465 1.179l2.844 13A1.5 1.5 0 0 1 19.636 20H4.364a1.5 1.5 0 0 1-1.466-1.821l2.844-13A1.5 1.5 0 0 1 7.207 4M10 4L8.75 20M14 4l1.25 16M4 13h5.25m.5-5h4.5m.5 7h5.75");
}
</style><path class="ylds_wbdx"/>`,
		"fallback": "uix:floorboards",
	});
}

export default Component;
