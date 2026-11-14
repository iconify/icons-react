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

.jkytt3bpb {
  d: path("M7 13a5 6 0 1 0 10 0a5 6 0 1 0-10 0");
}

.odz-7eb7j {
  d: path("M10 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0M3 8.5Q4.5 8 7.75 10m.5 7Q6.5 19 5 19.5m16-11Q19.5 8 16.25 10m-.5 7q1.75 2 3.25 2.5");
}
</style><g class="hntgybcog"><path class="jkytt3bpb"/><path class="odz-7eb7j"/></g>`,
		"fallback": "uix:baby-sea-turtle",
	});
}

export default Component;
