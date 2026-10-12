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

.k_mfrxdbj {
  d: path("M12 12V6.25a5.75 5.75 0 0 1 4.98 8.63Z");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="k_mfrxdbj"/></g>`,
		"fallback": "iconoven:elapsed",
	});
}

export default Component;
