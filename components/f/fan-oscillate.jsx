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

.i5z768-2u {
  d: path("m15 18.25l2.5.75l-.75 2.5M9 18.25L6.5 19l.75 2.5");
}

.ohbwrpjhg {
  d: path("M12 9.5q0-3.5 2.5-3.75M12 9.5q3 1.75 2 4m-2-4q-3 1.75-4.5-.25m10 9.776a11 11 0 0 1-11 0");
}

.trxlteb6d {
  d: path("M5 9.5a7 7 0 1 0 14 0a7 7 0 1 0-14 0");
}
</style><g class="hntgybcog"><path class="trxlteb6d"/><path class="ohbwrpjhg"/><path class="i5z768-2u"/></g>`,
		"fallback": "uix:fan-oscillate",
	});
}

export default Component;
