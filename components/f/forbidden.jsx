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

.kqlu-pfcu {
  d: path("m7.581 5.459l10.96 10.96a1.5 1.5 0 0 1 0 2.122a1.5 1.5 0 0 1-2.122 0L5.459 7.581a1.5 1.5 0 0 1 0-2.122a1.5 1.5 0 0 1 2.122 0");
}

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="kqlu-pfcu"/></g>`,
		"fallback": "uix:forbidden",
	});
}

export default Component;
