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
		"content": `<style>.fh3avdn0v {
  d: path("M4.75 3h6.5A1.75 1.75 0 0 1 13 4.75v.5A1.75 1.75 0 0 1 11.25 7h-6.5A1.75 1.75 0 0 1 3 5.25v-.5A1.75 1.75 0 0 1 4.75 3m5.5 7h5A1.75 1.75 0 0 1 17 11.75v.5A1.75 1.75 0 0 1 15.25 14h-5a1.75 1.75 0 0 1-1.75-1.75v-.5A1.75 1.75 0 0 1 10.25 10m5 7h4A1.75 1.75 0 0 1 21 18.75v.5A1.75 1.75 0 0 1 19.25 21h-4a1.75 1.75 0 0 1-1.75-1.75v-.5A1.75 1.75 0 0 1 15.25 17");
}

.fw095ebce {
  d: path("M5 7v12h8.5M5 12h3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="fh3avdn0v"/><path class="fw095ebce"/></g>`,
		"fallback": "uix:distributed-tracing",
	});
}

export default Component;
