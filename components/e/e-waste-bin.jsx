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
		"content": `<style>.dqihr_anb {
  d: path("M3 6.5h18m-11.5 0v-2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2m-10 0L6 21h12l1.5-14.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.op68y718b {
  d: path("M10.5 9.25L12.25 11l-1.75 1.75");
}

.v99yq9b7r {
  d: path("M15.5 14.5A3.5 3.5 0 1 1 12 11");
}
</style><g class="hntgybcog"><path class="dqihr_anb"/><path class="v99yq9b7r"/><path class="op68y718b"/></g>`,
		"fallback": "uix:e-waste-bin",
	});
}

export default Component;
