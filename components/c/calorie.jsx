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

.nwrftd82o {
  d: path("M5.5 12a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0");
}

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}

.so4fkts9t {
  d: path("M12 8.5c2.25 2 3 3.25 3 4.75c0 1.75-1.25 3-3 3s-3-1.25-3-3c0-1 .5-2 1.25-2.5c0 1 .5 1.75 1.25 1.75c0-1.5-.25-2.75.5-4");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="nwrftd82o"/><path class="so4fkts9t"/></g>`,
		"fallback": "uix:calorie",
	});
}

export default Component;
