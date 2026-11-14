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

.q4mewvbln {
  d: path("M16.5 2.5c-.5 5.5-4.5 9-6 12.5c-1 3 .5 5.5 3 5.5H16");
}

.rdr7p9b6s {
  d: path("M13 17.5a1.5 1.5 0 0 1 3 0M3 8q1.5-1.5 3 0t3 0t3 0m-9.5 5q1.5-1.5 3 0t3 0");
}
</style><g class="hntgybcog"><path class="q4mewvbln"/><path class="rdr7p9b6s"/></g>`,
		"fallback": "uix:gas-odour-test",
	});
}

export default Component;
