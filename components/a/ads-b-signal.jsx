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
		"content": `<style>.fdxphlb2j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 10q1.5 0 1.5 2.5v1.75l7 3.5v1.75l-7-1.75v2L15.25 21v.5L12 20.75l-3.25.75V21l1.75-1.25v-2l-7 1.75v-1.75l7-3.5V12.5q0-2.5 1.5-2.5M9.5 7.5a3.5 3.5 0 0 1 5 0M7 5a7 7 0 0 1 10 0");
}
</style><path class="fdxphlb2j"/>`,
		"fallback": "uix:ads-b-signal",
	});
}

export default Component;
