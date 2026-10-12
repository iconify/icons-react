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

.prz5adf_y {
  d: path("M13.5 15.25a1.5 1.5 0 1 1-3 0a1.5 1.5 0 1 1 3 0");
}

.q1cg06-mt {
  width: 11.5px;
  height: 4.5px;
  x: 6.25px;
  y: 2.75px;
  rx: 2.25px;
}

.sfisdhbcp {
  d: path("M8.5 5h7M8.75 9.75h6.5q2 0 1.78 1.99l-.81 7.52Q16 21.25 14 21.25h-4q-2 0-2.22-1.99l-.81-7.52q-.22-1.99 1.78-1.99");
}
</style><g class="hntgybcog"><rect class="q1cg06-mt"/><path class="sfisdhbcp"/><path class="prz5adf_y"/></g>`,
		"fallback": "iconoven:electric-shaver",
	});
}

export default Component;
