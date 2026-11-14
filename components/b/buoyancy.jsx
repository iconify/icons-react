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
		"content": `<style>.go7mwwwgr {
  d: path("M2.5 11Q4.75 9.5 7 11t4.5 0t4.5 0t4.5 0m-2.25 3.5v7M16 16.75l2.25-2.25l2.25 2.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w0g_zeb_z {
  d: path("M5.25 4.5h6.5a1.75 1.75 0 0 1 1.75 1.75v6.5a1.75 1.75 0 0 1-1.75 1.75h-6.5a1.75 1.75 0 0 1-1.75-1.75v-6.5A1.75 1.75 0 0 1 5.25 4.5");
}
</style><g class="hntgybcog"><path class="w0g_zeb_z"/><path class="go7mwwwgr"/></g>`,
		"fallback": "uix:buoyancy",
	});
}

export default Component;
