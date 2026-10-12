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

.t38lqe-ft {
  d: path("M6.75 15a5.25 5.25 0 0 1 10.5 0m-11.5.25h12.5M12 9.75v3");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="t38lqe-ft"/></g>`,
		"fallback": "iconoven:hard-hat-area",
	});
}

export default Component;
