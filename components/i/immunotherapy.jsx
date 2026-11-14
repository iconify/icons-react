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

.lqypy4hfu {
  d: path("m18 14l3.5 1.25v2.5c0 2-1.5 3.5-3.5 4c-2-.5-3.5-2-3.5-4v-2.5Z");
}

.t6tlbkb9e {
  d: path("M13.21 12.811L12.5 13l-1.75 3L8 14l-3.75-.5L5 10l-.75-3l2.5-1.25L9.5 3l2 2.5l3 .75v3l1.56 2.452");
}

.xmg5olw3d {
  fill: currentColor;
  d: path("M8 8c1.25-.75 3.25-.5 3.75 1c.25 1.5-.75 3-2.25 2.75S7.25 9 8 8");
}
</style><g class="hntgybcog"><path class="t6tlbkb9e"/><path class="xmg5olw3d"/><path class="lqypy4hfu"/></g>`,
		"fallback": "uix:immunotherapy",
	});
}

export default Component;
