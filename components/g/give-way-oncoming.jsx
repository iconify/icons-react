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
		"content": `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wlpyskbzg {
  d: path("M14.75 6.25v11.5M12.5 15.5l2.25 2.25L17 15.5m-7.75 2.25V10.5M7.75 12l1.5-1.5l1.5 1.5");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="wlpyskbzg"/></g>`,
		"fallback": "iconoven:give-way-oncoming",
	});
}

export default Component;
