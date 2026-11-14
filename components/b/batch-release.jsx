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

.rnfdpvb6d {
  d: path("M8.5 14.5L11 17l4.5-4.5");
}

.zmp2owtdl {
  d: path("M4.75 3h14.5A1.75 1.75 0 0 1 21 4.75v1.5A1.75 1.75 0 0 1 19.25 8H4.75A1.75 1.75 0 0 1 3 6.25v-1.5A1.75 1.75 0 0 1 4.75 3M4.5 8v11.5a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V8");
}
</style><g class="hntgybcog"><path class="zmp2owtdl"/><path class="rnfdpvb6d"/></g>`,
		"fallback": "uix:batch-release",
	});
}

export default Component;
