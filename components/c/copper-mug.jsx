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

.i9vmx_byw {
  d: path("M3.5 4.5h13v3l-1 12h-11l-1-12Z");
}

.pivjkpb0p {
  d: path("M16.25 10.5H19a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3.25M3.5 7.5h13");
}
</style><g class="hntgybcog"><path class="i9vmx_byw"/><path class="pivjkpb0p"/></g>`,
		"fallback": "uix:copper-mug",
	});
}

export default Component;
