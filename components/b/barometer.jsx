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

.lqzpwabvg {
  d: path("M7.4 15.86a6 6 0 1 1 9.2 0M12 12L9 8.75");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="lqzpwabvg"/></g>`,
		"fallback": "iconoven:barometer",
	});
}

export default Component;
