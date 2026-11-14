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
		"content": `<style>.ebeg3zbmm {
  d: path("M9.25 12a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0M6.5 12h.01m10.99 0h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xtnjfzbqn {
  d: path("M9.5 5h5a7 7 0 0 1 7 7a7 7 0 0 1-7 7h-5a7 7 0 0 1-7-7a7 7 0 0 1 7-7M12 5v14");
}
</style><g class="hntgybcog"><path class="xtnjfzbqn"/><path class="ebeg3zbmm"/></g>`,
		"fallback": "uix:ice-rink",
	});
}

export default Component;
