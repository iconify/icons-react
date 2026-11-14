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

.jdw2sfbjf {
  d: path("M7 12a5 5 0 1 0 10 0a5 5 0 1 0-10 0m3.5-1.5l3 3m0-3l-3 3");
}

.n5wh3h36c {
  d: path("M11 3.5h2a8.5 8.5 0 0 1 8.5 8.5a8.5 8.5 0 0 1-8.5 8.5h-2A8.5 8.5 0 0 1 2.5 12A8.5 8.5 0 0 1 11 3.5");
}
</style><g class="hntgybcog"><path class="n5wh3h36c"/><path class="jdw2sfbjf"/></g>`,
		"fallback": "uix:garbage-disposal",
	});
}

export default Component;
