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

.xpbletbft {
  d: path("m10.75 13.75l1.75-1v5");
}

.xv_y5yg6a {
  d: path("M7 5h10a3.5 3.5 0 0 1 3.5 3.5V17a3.5 3.5 0 0 1-3.5 3.5H7A3.5 3.5 0 0 1 3.5 17V8.5A3.5 3.5 0 0 1 7 5m1-2v4m8-4v4M3.5 10h17");
}
</style><g class="hntgybcog"><path class="xv_y5yg6a"/><path class="xpbletbft"/></g>`,
		"fallback": "uix:calendar-day",
	});
}

export default Component;
