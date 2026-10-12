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

.rllvxib4b {
  d: path("M10.25 9.75a2.25 2.25 0 1 1 0 4.5a2.25 2.25 0 1 1 0-4.5m7 5.25H20a1.25 1.25 0 0 1 1.25 1.25v1.5A1.25 1.25 0 0 1 20 19h-2.75Z");
}

.uwnh69b_r {
  d: path("M10.25 19a7 7 0 1 1 7-7v7Z");
}
</style><g class="hntgybcog"><path class="uwnh69b_r"/><path class="rllvxib4b"/></g>`,
		"fallback": "iconoven:bandage-roll",
	});
}

export default Component;
