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
		"content": `<style>.ry7do_wsf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7a8 2.5 0 1 0 16 0a8 2.5 0 1 0-16 0m8 2.5v11m-3 0h4.8m5.955-6.631l1.931.518a1.75 1.75 0 0 1 1.238 2.143l-1.035 3.864a1.75 1.75 0 0 1-2.144 1.237l-1.931-.518a1.75 1.75 0 0 1-1.238-2.143l1.035-3.864a1.75 1.75 0 0 1 2.144-1.237");
}
</style><path class="ry7do_wsf"/>`,
		"fallback": "uix:gaming-table-round",
	});
}

export default Component;
