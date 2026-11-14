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
		"content": `<style>.e7bskx1es {
  d: path("M2.5 7a7.5 3.5 0 1 0 15 0a7.5 3.5 0 1 0-15 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k7nrqubgq {
  d: path("M6.5 17a7.5 3.5 0 1 0 15 0a7.5 3.5 0 1 0-15 0");
}

.qazr6nb-c {
  d: path("M4.5 12a7.5 3.5 0 1 0 15 0a7.5 3.5 0 1 0-15 0");
}
</style><g class="hntgybcog"><path class="e7bskx1es"/><path class="qazr6nb-c"/><path class="k7nrqubgq"/></g>`,
		"fallback": "uix:bangles-stack",
	});
}

export default Component;
