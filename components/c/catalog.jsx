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
		"content": `<style>.ay956-clx {
  d: path("M7 7h.5A1.5 1.5 0 0 1 9 8.5V9a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 9v-.5A1.5 1.5 0 0 1 7 7m0 6.5h.5A1.5 1.5 0 0 1 9 15v.5A1.5 1.5 0 0 1 7.5 17H7a1.5 1.5 0 0 1-1.5-1.5V15A1.5 1.5 0 0 1 7 13.5M16.5 7h.5a1.5 1.5 0 0 1 1.5 1.5V9a1.5 1.5 0 0 1-1.5 1.5h-.5A1.5 1.5 0 0 1 15 9v-.5A1.5 1.5 0 0 1 16.5 7m0 6.5h.5a1.5 1.5 0 0 1 1.5 1.5v.5A1.5 1.5 0 0 1 17 17h-.5a1.5 1.5 0 0 1-1.5-1.5V15a1.5 1.5 0 0 1 1.5-1.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yuf1xrn_h {
  d: path("M12 5c-2-1.25-5.5-1.75-9.5-1.5v16c4-.25 7.5.25 9.5 1.5c2-1.25 5.5-1.75 9.5-1.5v-16c-4-.25-7.5.25-9.5 1.5m0 0v16");
}
</style><g class="hntgybcog"><path class="yuf1xrn_h"/><path class="ay956-clx"/></g>`,
		"fallback": "uix:catalog",
	});
}

export default Component;
