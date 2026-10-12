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

.jumqf8ewo {
  d: path("M2.75 6.75H12a7.25 7.25 0 0 1 3.06 13.82m2.42.65l-2.42-.65l1.06-2.27");
}

.r82p9vbru {
  cx: 12px;
  cy: 14px;
  r: 3.75px;
}
</style><g class="hntgybcog"><circle class="r82p9vbru"/><path class="jumqf8ewo"/></g>`,
		"fallback": "iconoven:gravity-assist",
	});
}

export default Component;
