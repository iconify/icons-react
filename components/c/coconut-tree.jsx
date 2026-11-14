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
		"content": `<style>.cfxqq_kin {
  fill: currentColor;
  d: path("M8.75 9.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m3.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l5coyccqb {
  d: path("M9.5 21.5c1-5 2.25-10 2.5-14.5m0 0C9 5 5 5.5 2.5 9.5C6 8.75 9 8.5 12 7m0 0c3-2 7-1.5 9.5 2.5C18 8.75 15 8.5 12 7m0 0c-.5-2.5-2.5-4.25-5.5-4.5C8.5 4 10 5.5 12 7m0 0c.5-2.5 2.5-4.25 5.5-4.5C15.5 4 14 5.5 12 7");
}
</style><g class="hntgybcog"><path class="l5coyccqb"/><path class="cfxqq_kin"/></g>`,
		"fallback": "uix:coconut-tree",
	});
}

export default Component;
