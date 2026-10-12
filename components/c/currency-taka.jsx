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

.hkda1fokz {
  d: path("M8 7.5a1.6 1.6 0 0 1 2.75 1.1V15a2.75 2.75 0 0 0 5.5 0v-.75M7.75 11h6.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="hkda1fokz"/></g>`,
		"fallback": "iconoven:currency-taka",
	});
}

export default Component;
