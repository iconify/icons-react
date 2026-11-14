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

.nm5vhubjn {
  d: path("M4.5 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}

.yrzr6jb5x {
  d: path("M6.875 6h10.25a4.375 4.375 0 0 1 4.375 4.375v3.25A4.375 4.375 0 0 1 17.125 18H6.875A4.375 4.375 0 0 1 2.5 13.625v-3.25A4.375 4.375 0 0 1 6.875 6");
}

.z_j-4sgkf {
  d: path("M7.5 10.75V12h1m5 0h5");
}
</style><g class="hntgybcog"><path class="yrzr6jb5x"/><path class="nm5vhubjn"/><path class="z_j-4sgkf"/></g>`,
		"fallback": "uix:input-time",
	});
}

export default Component;
