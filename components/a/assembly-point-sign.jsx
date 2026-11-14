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

.vcb2aqbfz {
  d: path("M6 2.5h12A3.5 3.5 0 0 1 21.5 6v8a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 14V6A3.5 3.5 0 0 1 6 2.5m6 15v4m-4.75-13h.01m4.74 0h.01m4.74 0h.01");
}

.wl61jtfpr {
  d: path("M5.75 14v-1.5a1.5 1.5 0 0 1 3 0V14m1.75 0v-1.5a1.5 1.5 0 0 1 3 0V14m1.75 0v-1.5a1.5 1.5 0 0 1 3 0V14");
}
</style><g class="hntgybcog"><path class="vcb2aqbfz"/><path class="wl61jtfpr"/></g>`,
		"fallback": "uix:assembly-point-sign",
	});
}

export default Component;
