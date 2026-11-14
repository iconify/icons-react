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

.szrve4buh {
  d: path("M9 17.5q0-6 6-6q0 6-6 6");
}

.wln_a1bla {
  d: path("M12 2.5s7 7.5 7 12a7 7 0 0 1-14 0c0-4.5 7-12 7-12");
}
</style><g class="hntgybcog"><path class="wln_a1bla"/><path class="szrve4buh"/></g>`,
		"fallback": "uix:biofuel",
	});
}

export default Component;
