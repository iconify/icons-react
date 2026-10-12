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
		"content": `<style>.ejmel3lck {
  cx: 12px;
  cy: 13.25px;
  r: 2px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qlp8a7bwg {
  d: path("m13.28 11.71l2.47-2.96");
}

.yd4kwwgnv {
  d: path("M5.46 19.79a9.25 9.25 0 1 1 13.08 0");
}
</style><g class="hntgybcog"><path class="yd4kwwgnv"/><circle class="ejmel3lck"/><path class="qlp8a7bwg"/></g>`,
		"fallback": "iconoven:gauge",
	});
}

export default Component;
