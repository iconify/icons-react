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
		"content": `<style>.nw1_800ko {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.86 10.64l3.28-4.03Q8.25 5.25 10 5.25h9.5q1.75 0 1.75 1.75v10q0 1.75-1.75 1.75H10q-1.75 0-2.86-1.36l-3.28-4.03q-1.11-1.36 0-2.72m8.39-1.14l5 5m0-5l-5 5");
}
</style><path class="nw1_800ko"/>`,
		"fallback": "iconoven:backspace",
	});
}

export default Component;
