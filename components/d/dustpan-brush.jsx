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
		"content": `<style>.ixkfxcbca {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.705 21h5.09a1.75 1.75 0 0 0 1.704-2.148l-.933-4A1.75 1.75 0 0 0 8.861 13.5H5.639a1.75 1.75 0 0 0-1.705 1.352l-.933 4A1.75 1.75 0 0 0 4.705 21m2.545-7.5V8m11-5.5v6M17 8.5h2.5a1.75 1.75 0 0 1 1.75 1.75A1.75 1.75 0 0 1 19.5 12H17a1.75 1.75 0 0 1-1.75-1.75A1.75 1.75 0 0 1 17 8.5M15.75 12L15 21h6.5l-.75-9");
}
</style><path class="ixkfxcbca"/>`,
		"fallback": "uix:dustpan-brush",
	});
}

export default Component;
