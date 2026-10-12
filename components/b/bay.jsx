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
		"content": `<style>.f8_n3-btd {
  d: path("M14.5 12c.83-.6 1.67-.6 2.5 0s1.67.6 2.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.td_h78bej {
  d: path("M2.75 2.75H12c3 0 6.5 1.75 7.5 4c-3.5-.25-8 1.25-8 5.25c0 3.5 4 5.25 9.75 5v4.25H2.75Z");
}
</style><g class="hntgybcog"><path class="td_h78bej"/><path class="f8_n3-btd"/></g>`,
		"fallback": "iconoven:bay",
	});
}

export default Component;
