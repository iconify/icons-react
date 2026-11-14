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
		"content": `<style>.d_zxnvbrf {
  d: path("M5 18.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M7.5 9H10a1.5 1.5 0 0 1 1.5 1.5v.5a1.5 1.5 0 0 1-1.5 1.5H7.5A1.5 1.5 0 0 1 6 11v-.5A1.5 1.5 0 0 1 7.5 9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vlq-uhb4k {
  d: path("M2.5 17V8a2 2 0 0 1 2-2H15v11ZM15 9.5h3.5l3 3.5v4H15");
}
</style><g class="hntgybcog"><path class="vlq-uhb4k"/><path class="d_zxnvbrf"/></g>`,
		"fallback": "uix:food-truck",
	});
}

export default Component;
