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
		"content": `<style>.aq8k4hbgm {
  d: path("M3.5 3v17.5h8.4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mioihvb8s {
  d: path("M6.5 10.5c2-5.5 4-5.5 6-2s4 1.5 7-4m-13 12c2-5.5 4-5.5 6-3.5m1.75 5a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0m2 0h3.5");
}
</style><g class="hntgybcog"><path class="aq8k4hbgm"/><path class="mioihvb8s"/></g>`,
		"fallback": "uix:chart-series-remove",
	});
}

export default Component;
