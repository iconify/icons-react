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
		"content": `<style>.bpqsj0bcw {
  d: path("M5.5 20c0-7.5 5-12 13.5-12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q7pl131ie {
  d: path("M15.5 4.5L19 8l-3.5 3.5");
}
</style><g class="hntgybcog"><path class="bpqsj0bcw"/><path class="q7pl131ie"/></g>`,
		"fallback": "uix:arrow-curve-right",
	});
}

export default Component;
