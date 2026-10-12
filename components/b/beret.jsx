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
		"content": `<style>.apafmjb9n {
  d: path("M2.75 11.5c0-3.5 4.25-6 9.5-6s9 2.25 9 5c0 2.25-2.75 3.75-5.75 4H6c-2 0-3.25-1.25-3.25-3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j7ne749jw {
  width: 11px;
  height: 3px;
  x: 6px;
  y: 17px;
  rx: 1.5px;
}

.zogqcsd2k {
  d: path("M12.25 5.5L13 2.75");
}
</style><g class="hntgybcog"><path class="apafmjb9n"/><rect class="j7ne749jw"/><path class="zogqcsd2k"/></g>`,
		"fallback": "iconoven:beret",
	});
}

export default Component;
