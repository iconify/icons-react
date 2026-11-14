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

.zcqx0pbfs {
  d: path("M13 12c0-3.5 2.5-5.25 7-5.25M3 20q2.25-1.5 4.5 0t4.5 0t4.5 0t4.5 0");
}

.zyhvpqonl {
  d: path("M3 12h18l-2.25 4.5H5.5Zm5 0c0-5.5 3.5-8.5 8.5-8.5");
}
</style><g class="hntgybcog"><path class="zyhvpqonl"/><path class="zcqx0pbfs"/></g>`,
		"fallback": "uix:fire-boat",
	});
}

export default Component;
