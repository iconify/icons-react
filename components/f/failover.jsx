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
		"content": `<style>.d2i7k4bss {
  d: path("M2.5 4.5H10c4 0 5 3.5 5 11m1.5-11h5M2.5 19h19");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tiitzedzb {
  d: path("M12.75 13.25L15 15.5l2.25-2.25");
}
</style><g class="hntgybcog"><path class="d2i7k4bss"/><path class="tiitzedzb"/></g>`,
		"fallback": "uix:failover",
	});
}

export default Component;
