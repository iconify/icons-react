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
		"content": `<style>.bt1li8-oe {
  d: path("m10.25 14.5l1.25 1.25l2.25-2.5");
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

.z2_dgbcrn {
  d: path("M13.5 2.5v4a2 2 0 0 0 2 2h4m-11 6a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0");
}
</style><g class="hntgybcog"><path class="w_a5jubhp"/><path class="z2_dgbcrn"/><path class="bt1li8-oe"/></g>`,
		"fallback": "uix:claim-status",
	});
}

export default Component;
