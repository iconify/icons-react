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

.w6fm_8bjq {
  d: path("M12 2.75a9.25 9.25 0 0 1 0 18.5Z");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="w6fm_8bjq"/></g>`,
		"fallback": "iconoven:dark-mode",
	});
}

export default Component;
