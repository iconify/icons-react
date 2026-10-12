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

.tgpr2gizt {
  d: path("M8.75 17.25V6.75l6.5 10.5V6.75M6.5 10.5h11m-11 3h11");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="tgpr2gizt"/></g>`,
		"fallback": "iconoven:currency-naira",
	});
}

export default Component;
