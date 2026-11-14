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
		"content": `<style>.a2vyczbel {
  d: path("M9.5 6.5L10 13l-7 8.5m7-8.5l6 2v6.5m-6.25-12H15l6.5-3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hrn_aj3jr {
  d: path("M7.5 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><g class="hntgybcog"><path class="hrn_aj3jr"/><path class="a2vyczbel"/></g>`,
		"fallback": "uix:fencer-lunge",
	});
}

export default Component;
