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

.v2lfx5_1s {
  d: path("M14.75 9.25a3.75 3.75 0 1 0 0 5.5");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="v2lfx5_1s"/></g>`,
		"fallback": "iconoven:copyright-symbol",
	});
}

export default Component;
