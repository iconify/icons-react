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
		"content": `<style>.ge_tdvr0q {
  d: path("M3 10.5V7a2 2 0 0 1 2-2h4.5l2 2H19a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-.5m-.5-3H11");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wuhrd_q-q {
  d: path("M8.75 11.25L11 13.5l-2.25 2.25");
}
</style><g class="hntgybcog"><path class="ge_tdvr0q"/><path class="wuhrd_q-q"/></g>`,
		"fallback": "uix:folder-input",
	});
}

export default Component;
