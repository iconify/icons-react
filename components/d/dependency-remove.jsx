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

.rx9kgfbsu {
  d: path("m5.25 13.5l2 2l2-2M15 18h6");
}

.z9t64tbco {
  d: path("M5.125 3h4.25A2.625 2.625 0 0 1 12 5.625v.25A2.625 2.625 0 0 1 9.375 8.5h-4.25A2.625 2.625 0 0 1 2.5 5.875v-.25A2.625 2.625 0 0 1 5.125 3m0 12.5h4.25A2.625 2.625 0 0 1 12 18.125v.25A2.625 2.625 0 0 1 9.375 21h-4.25A2.625 2.625 0 0 1 2.5 18.375v-.25A2.625 2.625 0 0 1 5.125 15.5m2.125-7v7");
}
</style><g class="hntgybcog"><path class="z9t64tbco"/><path class="rx9kgfbsu"/></g>`,
		"fallback": "uix:dependency-remove",
	});
}

export default Component;
