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
		"content": `<style>.i-u_mnb-g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 17.5V3M8.561 6.439l2.378-2.378a1.5 1.5 0 0 1 2.122 0l2.378 2.378A1.5 1.5 0 0 1 14.379 9H9.621a1.5 1.5 0 0 1-1.06-2.561M4 21h16");
}
</style><path class="i-u_mnb-g"/>`,
		"fallback": "uix:depart",
	});
}

export default Component;
