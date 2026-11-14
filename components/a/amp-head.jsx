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
		"content": `<style>.b8oqm7keg {
  d: path("M6 7.5h12a3.5 3.5 0 0 1 3.5 3.5v5a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 16v-5A3.5 3.5 0 0 1 6 7.5m2.5 0V5h7v2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tswsujb1u {
  d: path("M5.5 13.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m5.25 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m5.25 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}
</style><g class="hntgybcog"><path class="b8oqm7keg"/><path class="tswsujb1u"/></g>`,
		"fallback": "uix:amp-head",
	});
}

export default Component;
