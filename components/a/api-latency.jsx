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
		"content": `<style>.a6k62accz {
  d: path("M18 16.5V18l1.25 1");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o2zzotkrd {
  d: path("M11.95 17.895L10 19l-7.5-4.25v-8.5L10 2l7.5 4.25v5.68");
}

.t48xakb0n {
  d: path("M2.5 6.25L10 10.5l7.5-4.25M10 10.5V19m4.75-1a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0");
}
</style><g class="hntgybcog"><path class="o2zzotkrd"/><path class="t48xakb0n"/><path class="a6k62accz"/></g>`,
		"fallback": "uix:api-latency",
	});
}

export default Component;
