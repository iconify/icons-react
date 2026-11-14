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

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}

.y_ug5rpod {
  d: path("M12 2.5C8 7 8 17 12 21.5m0-19c4 4.5 4 14.5 0 19M2.5 12h19");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="y_ug5rpod"/></g>`,
		"fallback": "uix:globe-travel",
	});
}

export default Component;
