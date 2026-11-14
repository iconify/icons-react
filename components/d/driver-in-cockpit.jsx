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

.pkaa_7qgi {
  d: path("M8.25 7a3 3 0 1 0 6 0a3 3 0 1 0-6 0M3 16a3 3 0 1 0 6 0a3 3 0 1 0-6 0m12 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0m-3.25-9.5h2.5");
}

.t66qvzb0k {
  d: path("M2.5 13V9H6v1h8.5l7 1.5V13Z");
}
</style><g class="hntgybcog"><path class="t66qvzb0k"/><path class="pkaa_7qgi"/></g>`,
		"fallback": "uix:driver-in-cockpit",
	});
}

export default Component;
