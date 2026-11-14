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
		"content": `<style>.fgw83ebzl {
  d: path("M13.5 9a2.5 5 0 1 0 5 0a2.5 5 0 1 0-5 0M7 4v10m3.5-10v10m.5 5a5 1.75 0 1 0 10 0a5 1.75 0 1 0-10 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l2tu2emwx {
  d: path("M16 4H6.5c-2.5 0-4 2.5-4 5s1.5 5 4 5H16");
}
</style><g class="hntgybcog"><path class="l2tu2emwx"/><path class="fgw83ebzl"/></g>`,
		"fallback": "uix:barrel-tipped",
	});
}

export default Component;
