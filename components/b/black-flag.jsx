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
		"content": `<style>.a2uobqk4k {
  fill: currentColor;
  d: path("M9.25 2.5h5.5a1.75 1.75 0 0 1 1.75 1.75v7.5a1.75 1.75 0 0 1-1.75 1.75h-5.5a1.75 1.75 0 0 1-1.75-1.75v-7.5A1.75 1.75 0 0 1 9.25 2.5");
}

.hh633abth {
  d: path("M12 13.5v5m-3.5 3l3.5-3l3.5 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="a2uobqk4k"/><path class="hh633abth"/></g>`,
		"fallback": "uix:black-flag",
	});
}

export default Component;
