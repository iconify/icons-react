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

.zowiwwbmr {
  d: path("M6 6L18 18");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.zyly0dhik {
  d: path("M18 9L18 18L9 18");
}
</style><g class="hntgybcog"><path class="zowiwwbmr"/><path class="zyly0dhik"/></g>`,
		"fallback": "solar:arrow-right-down-line-duotone",
	});
}

export default Component;
