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
		"content": `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.on2kf3b8y {
  d: path("M16 13.5a4 4 0 1 1-5.69-3.63M7.25 17.5H16M10.5 5.75v7m3-7v7");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="on2kf3b8y"/></g>`,
		"fallback": "iconoven:currency-lari",
	});
}

export default Component;
