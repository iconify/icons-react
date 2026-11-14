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
		"content": `<style>.e8_os07wv {
  d: path("M5.625 3h9.75A2.625 2.625 0 0 1 18 5.625v4.75A2.625 2.625 0 0 1 15.375 13h-9.75A2.625 2.625 0 0 1 3 10.375v-4.75A2.625 2.625 0 0 1 5.625 3M5.5 16a3 3 0 0 0 3 3h4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sh5urgb2k {
  d: path("m10.5 17l2 2l-2 2M3 6.5h15m1.5 8l-3.75 3.75h4.5L16.5 22");
}
</style><g class="hntgybcog"><path class="e8_os07wv"/><path class="sh5urgb2k"/></g>`,
		"fallback": "uix:direct-debit-energy",
	});
}

export default Component;
