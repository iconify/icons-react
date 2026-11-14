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

.trxlteb6d {
  d: path("M5 9.5a7 7 0 1 0 14 0a7 7 0 1 0-14 0");
}

.x7ct0sbnq {
  d: path("M12 9.5q-2.5-3.5 0-7m0 7q4.5.5 5.75 4M12 9.5q-4 2.5-5.75 4M3 20.5q4.5-2.5 9 0t9 0");
}
</style><g class="hntgybcog"><path class="trxlteb6d"/><path class="x7ct0sbnq"/></g>`,
		"fallback": "uix:beach-volleyball",
	});
}

export default Component;
