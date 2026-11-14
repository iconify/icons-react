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
		"content": `<style>.gfvroktzj {
  d: path("m17 16.25l-2.25 2.25L17 20.75m-5-11v3m0 3h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p62afuj-y {
  d: path("M10.5 18.5H7a4 4 0 0 1 0-8a5.5 5.5 0 0 1 11 1a3.5 3.5 0 0 1-1 7h-2.25");
}
</style><g class="hntgybcog"><path class="p62afuj-y"/><path class="gfvroktzj"/></g>`,
		"fallback": "uix:cloud-sync-error",
	});
}

export default Component;
