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
		"content": `<style>.ihl0xhb0o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 13.5h13a3 3 0 0 1 3 3a3 3 0 0 1-3 3h-13a3 3 0 0 1-3-3a3 3 0 0 1 3-3m4.125-9h4.75A2.625 2.625 0 0 1 17 7.125v3.75a2.625 2.625 0 0 1-2.625 2.625h-4.75A2.625 2.625 0 0 1 7 10.875v-3.75A2.625 2.625 0 0 1 9.625 4.5M12 4.5v3m-6.5 9h.01m12.99 0h.01");
}
</style><path class="ihl0xhb0o"/>`,
		"fallback": "uix:checkout-belt",
	});
}

export default Component;
