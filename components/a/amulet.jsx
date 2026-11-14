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

.o9d4etjxg {
  d: path("M5.75 15.25a6.25 6.25 0 1 0 12.5 0a6.25 6.25 0 1 0-12.5 0");
}

.sdrf9q9_y {
  d: path("M6 2.5C6 6 9 9 12 9s6-3 6-6.5");
}

.xazzummud {
  d: path("m13.145 13.353l.785.928a1.5 1.5 0 0 1 0 1.938l-.785.928a1.5 1.5 0 0 1-2.29 0l-.785-.928a1.5 1.5 0 0 1 0-1.938l.785-.928a1.5 1.5 0 0 1 2.29 0");
}
</style><g class="hntgybcog"><path class="sdrf9q9_y"/><path class="o9d4etjxg"/><path class="xazzummud"/></g>`,
		"fallback": "uix:amulet",
	});
}

export default Component;
