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
		"content": `<style>.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l7lvdwbxu {
  d: path("M10 13a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.mfc7nxp-y {
  d: path("M9 7h6");
}

.s1pdfd1ij {
  d: path("M9.5 14.5 12 17l2.5 -2.5");
}
</style><g class="hntgybcog"><path class="abnm6smsv"/><path class="mfc7nxp-y"/><path class="l7lvdwbxu"/><path class="s1pdfd1ij"/></g>`,
		"fallback": "iconmind:api-version-outline-thin",
	});
}

export default Component;
