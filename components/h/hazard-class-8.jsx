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
		"content": `<style>.h98gxob2v {
  d: path("m13.856 4.356l5.788 5.788a2.625 2.625 0 0 1 0 3.712l-5.788 5.788a2.625 2.625 0 0 1-3.712 0l-5.788-5.788a2.625 2.625 0 0 1 0-3.712l5.788-5.788a2.625 2.625 0 0 1 3.712 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p98x2ppyv {
  d: path("M13.75 11.25L11.5 9a1.5 1.5 0 1 0-2 2l2.25 2.25m1.75 1s1 1.25 1 1.75a1 1 0 0 1-2 0c0-.5 1-1.75 1-1.75");
}
</style><g class="hntgybcog"><path class="h98gxob2v"/><path class="p98x2ppyv"/></g>`,
		"fallback": "uix:hazard-class-8",
	});
}

export default Component;
