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

.i-uvhe2-l {
  width: 13px;
  height: 6.25px;
  x: 5.5px;
  y: 15px;
  rx: 0.75px;
}

.m5gc1-b1l {
  d: path("M10.5 21.25V19.5a1.5 1.5 0 0 1 3 0v1.75");
}

.sggsbobno {
  d: path("M12 2.75V4.5m0 0C13 6 15 7 17 8.75s2.75 3.75 2.25 6.25H4.75C4.25 12.5 5 10.5 7 8.75S11 6 12 4.5");
}
</style><g class="hntgybcog"><path class="sggsbobno"/><rect class="i-uvhe2-l"/><path class="m5gc1-b1l"/></g>`,
		"fallback": "iconoven:dome-mughal",
	});
}

export default Component;
