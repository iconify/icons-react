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
		"content": `<style>.e6m6dkbmm {
  d: path("M16.5 16.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M9.25 6.5l7.5 7.5M6.5 9.25l7.5 7.5m-10-9a3.75 2 0 1 0 7.5 0a3.75 2 0 1 0-7.5 0m2.75-.25h.01m1.99.75h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pyzdfnbsm {
  d: path("M14 18.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0");
}
</style><g class="hntgybcog"><path class="pyzdfnbsm"/><path class="e6m6dkbmm"/></g>`,
		"fallback": "uix:bone-marrow",
	});
}

export default Component;
