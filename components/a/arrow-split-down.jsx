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
		"content": `<style>.coo_kxb_f {
  d: path("M12 3.5V9c0 3-5 3-5 6.5V20m5-11c0 3 5 3 5 6.5V20");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j0vjosbzs {
  d: path("m4 17l3 3l3-3m4 0l3 3l3-3");
}
</style><g class="hntgybcog"><path class="coo_kxb_f"/><path class="j0vjosbzs"/></g>`,
		"fallback": "uix:arrow-split-down",
	});
}

export default Component;
