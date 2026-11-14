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
		"content": `<style>.hbw6g-ffv {
  fill: currentColor;
  d: path("M12 6.5c0 3.5 2 5.5 5.5 5.5c-3.5 0-5.5 2-5.5 5.5C12 14 10 12 6.5 12C10 12 12 10 12 6.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="hbw6g-ffv"/></g>`,
		"fallback": "uix:ai-sparkle-circle",
	});
}

export default Component;
