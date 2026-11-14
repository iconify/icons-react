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
		"content": `<style>.h50skpb5y {
  d: path("M13.5 2.5v4a2 2 0 0 0 2 2h4m-7.991 3.324l2.784 1.632a1.5 1.5 0 0 1 0 2.588l-2.784 1.632a1.5 1.5 0 0 1-2.259-1.294v-3.264a1.5 1.5 0 0 1 2.259-1.294");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w_a5jubhp {
  d: path("M7 2.5h6.5l6 6V19a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 19V5A2.5 2.5 0 0 1 7 2.5");
}
</style><g class="hntgybcog"><path class="w_a5jubhp"/><path class="h50skpb5y"/></g>`,
		"fallback": "uix:file-video",
	});
}

export default Component;
