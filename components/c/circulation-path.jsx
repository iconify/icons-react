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

.iv1dksbnm {
  d: path("M14 4.5a11 11 0 0 1-1 3.75M11.75 10A11 11 0 0 1 9 12.75m-2 1a11 11 0 0 1-2.5.75");
}

.kjz04c4oa {
  d: path("m5.625 13.375l-.064.064a1.5 1.5 0 0 0 0 2.122l.064.064a.659.659 0 0 0 1.125-.466v-1.318a.659.659 0 0 0-1.125-.466");
}

.uu-y5wjts {
  d: path("M3 12V3.5h8.5m5 0H21v17H3V17");
}
</style><g class="hntgybcog"><path class="uu-y5wjts"/><path class="iv1dksbnm"/><path class="kjz04c4oa"/></g>`,
		"fallback": "uix:circulation-path",
	});
}

export default Component;
