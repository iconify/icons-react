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

.zm5rv1fdq {
  d: path("M12 5.5a6.5 6.5 0 0 1 6.5 6.5M12 12l3-3m-3 3h.01");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="zm5rv1fdq"/></g>`,
		"fallback": "uix:boost-gauge",
	});
}

export default Component;
