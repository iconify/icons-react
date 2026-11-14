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
		"content": `<style>.s7khu_bpq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 8H13l5 2l-5 2H4.5a2 2 0 0 1 0-4m4 4q.5 3-1 5.5M20.5 7h.01m.49 3h.01m-.51 3h.01");
}
</style><path class="s7khu_bpq"/>`,
		"fallback": "uix:airbrush",
	});
}

export default Component;
