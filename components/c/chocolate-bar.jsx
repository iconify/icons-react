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

.it8852bvj {
  d: path("M5 13V4.75a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2V13l-1.75-1.25L15.5 13l-1.75-1.25L12 13l-1.75-1.25L8.5 13l-1.75-1.25Zm7-10.25V12M5 7.5h14");
}

.suj3x6w_f {
  d: path("m5 13l1.75-1.25L8.5 13l1.75-1.25L12 13l1.75-1.25L15.5 13l1.75-1.25L19 13v6.25a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2Z");
}
</style><g class="hntgybcog"><path class="it8852bvj"/><path class="suj3x6w_f"/></g>`,
		"fallback": "iconoven:chocolate-bar",
	});
}

export default Component;
