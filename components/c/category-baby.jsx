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
		"content": `<style>.f8btrr_3b {
  d: path("M7.5 17.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.me2phfb_o {
  d: path("M9.5 7V5.5a2.5 2.5 0 0 1 5 0V7m-9 0h13a3 3 0 0 1 3 3a3 3 0 0 1-3 3h-13a3 3 0 0 1-3-3a3 3 0 0 1 3-3");
}
</style><g class="hntgybcog"><path class="me2phfb_o"/><path class="f8btrr_3b"/></g>`,
		"fallback": "uix:category-baby",
	});
}

export default Component;
