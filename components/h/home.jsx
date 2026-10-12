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

.m9fs_2b8x {
  d: path("M9.75 20.25V15.5a2.25 2.25 0 0 1 4.5 0v4.75");
}

.t5yessbcp {
  d: path("M3.75 9.75L12 3.25l8.25 6.5v8.5a2 2 0 0 1-2 2H5.75a2 2 0 0 1-2-2Z");
}
</style><g class="hntgybcog"><path class="t5yessbcp"/><path class="m9fs_2b8x"/></g>`,
		"fallback": "iconoven:home",
	});
}

export default Component;
