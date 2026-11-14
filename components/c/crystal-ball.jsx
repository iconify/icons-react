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
		"content": `<style>.a1p54ripv {
  d: path("M7.5 16a7.5 7.5 0 1 1 9 0m-9 0l-3 5h15l-3-5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yoz2ntbog {
  d: path("M8 10a4 4 0 0 1 4-4");
}
</style><g class="hntgybcog"><path class="a1p54ripv"/><path class="yoz2ntbog"/></g>`,
		"fallback": "uix:crystal-ball",
	});
}

export default Component;
