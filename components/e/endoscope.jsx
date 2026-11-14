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
		"content": `<style>.gftmx7xzj {
  d: path("M15 11a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m1.5 0h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vl4o8ubvw {
  d: path("M5 14za2.5 2.5 0 0 1 2.5 2.5V19A2.5 2.5 0 0 1 5 21.5A2.5 2.5 0 0 1 2.5 19v-2.5A2.5 2.5 0 0 1 5 14m0 0c0-7 4.5-10 8.25-5.5m0 2.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0");
}
</style><g class="hntgybcog"><path class="vl4o8ubvw"/><path class="gftmx7xzj"/></g>`,
		"fallback": "uix:endoscope",
	});
}

export default Component;
