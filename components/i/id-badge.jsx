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

.vh7wxeb-c {
  d: path("M9.375 4.5h5.25A4.375 4.375 0 0 1 19 8.875v8.25a4.375 4.375 0 0 1-4.375 4.375h-5.25A4.375 4.375 0 0 1 5 17.125v-8.25A4.375 4.375 0 0 1 9.375 4.5m.625 3h4");
}

.vz3i3ub0v {
  d: path("M9.75 12.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M8.5 18.5C8.5 17 10 16 12 16s3.5 1 3.5 2.5");
}
</style><g class="hntgybcog"><path class="vh7wxeb-c"/><path class="vz3i3ub0v"/></g>`,
		"fallback": "uix:id-badge",
	});
}

export default Component;
