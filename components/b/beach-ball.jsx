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

.u9hrsvctz {
  d: path("M12 2.75c-3.5 4.5-3.5 14 0 18.5c3.5-4.5 3.5-14 0-18.5");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="u9hrsvctz"/></g>`,
		"fallback": "iconoven:beach-ball",
	});
}

export default Component;
