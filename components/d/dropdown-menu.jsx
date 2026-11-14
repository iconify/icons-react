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
		"content": `<style>.dw08_xb_f {
  d: path("M15.5 5.5L17 7l1.5-1.5M5 13.5h14M5 18h10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ozkif0bun {
  d: path("M5.75 3h12.5a3.25 3.25 0 0 1 3.25 3.25a3.25 3.25 0 0 1-3.25 3.25H5.75A3.25 3.25 0 0 1 2.5 6.25A3.25 3.25 0 0 1 5.75 3");
}
</style><g class="hntgybcog"><path class="ozkif0bun"/><path class="dw08_xb_f"/></g>`,
		"fallback": "uix:dropdown-menu",
	});
}

export default Component;
