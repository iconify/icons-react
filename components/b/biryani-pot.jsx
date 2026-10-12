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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m0tqvhb2a {
  d: path("M5.5 14.25q1.08 1 2.17 0q1.08 1 2.17 0q1.08 1 2.17 0q1.08 1 2.17 0q1.08 1 2.17 0q1.08 1 2.17 0");
}

.q0r-77kgr {
  d: path("M3.75 11.25h16.5v2a8.25 8 0 0 1-16.5 0Zm1.5 0a6.75 4 0 0 1 13.5 0Zm-2.5 0h18.5m-12.5-6c-.9-.75.9-1.5 0-2.5M12 5c-.9-.75.9-1.5 0-2.25m3.25 2.5c-.9-.75.9-1.5 0-2.5");
}
</style><g class="hntgybcog"><path class="q0r-77kgr"/><path class="m0tqvhb2a"/></g>`,
		"fallback": "iconoven:biryani-pot",
	});
}

export default Component;
