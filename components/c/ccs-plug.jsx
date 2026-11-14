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
		"content": `<style>.f5b2gmb-y {
  d: path("M6.5 2.5h11A2.5 2.5 0 0 1 20 5v6.5a8 8 0 0 1-16 0V5a2.5 2.5 0 0 1 2.5-2.5m5.5 17v2m-8-11h16");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o6ao4ofcy {
  d: path("M7.75 6.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m6 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m-3.5 8.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}
</style><g class="hntgybcog"><path class="f5b2gmb-y"/><path class="o6ao4ofcy"/></g>`,
		"fallback": "uix:ccs-plug",
	});
}

export default Component;
