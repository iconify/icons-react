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
		"content": `<style>.exoj6kb2r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.572 20.5H4c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5c.931 0 1.814.108 2.625.311M6.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0m12 8.25c-.75-1-3-1-3 1.25c0 1.5.5 2.25.75 3.25L17 21.5h.75l.75-1.75l.75 1.75H20l.75-1.75c.25-1 .75-1.75.75-3.25c0-2.25-2.25-2.25-3-1.25");
}
</style><path class="exoj6kb2r"/>`,
		"fallback": "uix:dental-hygienist",
	});
}

export default Component;
