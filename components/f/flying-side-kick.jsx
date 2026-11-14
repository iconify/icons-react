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
		"content": `<style>.e73b_jbfq {
  d: path("M3 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0M8 9l3 4.5h10m-10 0l-4 3l3 3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i_pgfyvot {
  d: path("m3.5 12l5-2.5l5-1.5");
}
</style><g class="hntgybcog"><path class="e73b_jbfq"/><path class="i_pgfyvot"/></g>`,
		"fallback": "uix:flying-side-kick",
	});
}

export default Component;
