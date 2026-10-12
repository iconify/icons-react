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
		"content": `<style>.ijkg1-2fs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 6.25c2.25 0 3.75 1.25 5 4L12 13.5c.75 1.75 1.75 3.5 1.75 5.25c0 1.25-.75 2-1.75 2s-1.75-.75-1.75-2c0-1.75 1-3.5 1.75-5.25l7.75-8");
}
</style><path class="ijkg1-2fs"/>`,
		"fallback": "iconoven:gamma-sign",
	});
}

export default Component;
