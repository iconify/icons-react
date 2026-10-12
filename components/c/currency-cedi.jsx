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

.hy_8sybsq {
  d: path("M15.54 8.46a5 5 0 1 0 0 7.08M12 5.75v12.5");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="hy_8sybsq"/></g>`,
		"fallback": "iconoven:currency-cedi",
	});
}

export default Component;
