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
		"content": `<style>.elid7fhba {
  d: path("M6.875 4.5h10.25A4.375 4.375 0 0 1 21.5 8.875v6.25a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 15.125v-6.25A4.375 4.375 0 0 1 6.875 4.5m-.375 0v15m11-15v15M9.25 12h5.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uztqqg1zk {
  d: path("M11 10.25L9.25 12L11 13.75m2-3.5L14.75 12L13 13.75");
}
</style><g class="hntgybcog"><path class="elid7fhba"/><path class="uztqqg1zk"/></g>`,
		"fallback": "uix:flexbox",
	});
}

export default Component;
