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

.o4bw0_bzk {
  d: path("M13.25 4c-1.25.5-1.5 3-.5 4.75c1-.75 1.25-3.25.5-4.75m2.25 1.75h.01M9 19.5c0-2.75 1.75-4.5 4.25-4.5M6 16.5c-2.25-.25-3.25-1.75-3-3.75m16 8.75l-.5-2m2.25 2l.5-2");
}

.rdzfmkniu {
  d: path("M7.5 19.5c-2 0-2.5-2.5-1.25-4.5l5.25-6V6.5c0-1.75 1.25-3 3-3c1.5 0 2.5 1 2.75 2l1.75.75c.75.25.75 1.5 0 2c-.5.5-1.25.75-2.5 1V19.5Zm-5 2h19");
}
</style><g class="hntgybcog"><path class="rdzfmkniu"/><path class="o4bw0_bzk"/></g>`,
		"fallback": "uix:dog-park",
	});
}

export default Component;
