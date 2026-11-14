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

.k0odpxbiz {
  d: path("M3 18h18c-1 1.75-2.5 2.5-4.5 2.5h-9c-2 0-3.5-.75-4.5-2.5m7.5-10.25h.01m2.99 0h.01M12 10.25h.01");
}

.qf7cuqrje {
  d: path("M5 11a7 7 0 1 0 14 0a7 7 0 1 0-14 0");
}
</style><g class="hntgybcog"><path class="qf7cuqrje"/><path class="k0odpxbiz"/></g>`,
		"fallback": "uix:coconut-offering",
	});
}

export default Component;
