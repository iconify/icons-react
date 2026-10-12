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

.mfokxf48m {
  d: path("M2.75 17.5h18.5v.5A3.25 3.25 0 0 1 18 21.25H6A3.25 3.25 0 0 1 2.75 18Z");
}

.v3d8det9k {
  d: path("M4.75 17.5V10a2 2 0 0 1 2-2h10.5a2 2 0 0 1 2 2v7.5");
}

.z2-j-xurr {
  width: 8px;
  height: 4.75px;
  x: 8px;
  y: 12.75px;
  rx: 1px;
}
</style><g class="hntgybcog"><path class="v3d8det9k"/><rect class="z2-j-xurr"/><path class="mfokxf48m"/></g>`,
		"fallback": "iconoven:butter-dish",
	});
}

export default Component;
