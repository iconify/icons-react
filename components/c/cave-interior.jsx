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

.ix2f4s1as {
  d: path("M8 5.25L9.5 9.5L11 4m2 0l1.5 5.5L16 5.25");
}

.qob-g5brz {
  d: path("M2.5 20.5h19M5 20.5V11a7 7 0 0 1 14 0v9.5");
}
</style><g class="hntgybcog"><path class="qob-g5brz"/><path class="ix2f4s1as"/></g>`,
		"fallback": "uix:cave-interior",
	});
}

export default Component;
