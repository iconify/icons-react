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

.itt9800jv {
  width: 9px;
  height: 3.5px;
  x: 7px;
  y: 2.75px;
  rx: 1px;
}

.vzp106bxz {
  d: path("M9.5 6.25h4q1.5 0 1.5 1.5v4q0 1.5 1.21 2.39l2.33 1.72q1.21.89.33 2.11l-1.49 2.06q-.88 1.22-2.09.33l-6.08-4.47Q8 15 8 13.5V7.75q0-1.5 1.5-1.5");
}
</style><g class="hntgybcog"><rect class="itt9800jv"/><path class="vzp106bxz"/></g>`,
		"fallback": "iconoven:christmas-stocking",
	});
}

export default Component;
