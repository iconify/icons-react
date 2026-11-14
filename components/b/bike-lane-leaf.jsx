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

.t6rxi1eln {
  d: path("m5.75 9.5l2.5-6h5.25l2.25 6m-7.5-6l2.5 6l2.75-6m2 18c0-4.75 1.5-6.5 6-6.5c0 4.75-1.5 6.5-6 6.5m0 0l3.25-3.25");
}

.wpe1eubdh {
  d: path("M2.5 9.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0m10 0a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0M2.5 17h10");
}
</style><g class="hntgybcog"><path class="wpe1eubdh"/><path class="t6rxi1eln"/></g>`,
		"fallback": "uix:bike-lane-leaf",
	});
}

export default Component;
