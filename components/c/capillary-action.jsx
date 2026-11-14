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
		"content": `<style>.m5ly_ib_u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 11v8.5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V11M10.5 2.5v16m3-16v16M10.5 8q1.5 1.5 3 0M3 15h7.5m3 0H21");
}
</style><path class="m5ly_ib_u"/>`,
		"fallback": "uix:capillary-action",
	});
}

export default Component;
