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

.sm7mmswkd {
  d: path("M7 3v15.5l3 -3 3.5 3.5 2.5 -2.5 -3.5 -3.5H17Z");
}

.wqyzvvbsm {
  fill: currentColor;
  d: path("M7 3v15.5l3 -3 3.5 3.5 2.5 -2.5 -3.5 -3.5H17Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="wqyzvvbsm"/><path class="sm7mmswkd"/></g>`,
		"fallback": "iconmind:cursor-duotone-thin",
	});
}

export default Component;
