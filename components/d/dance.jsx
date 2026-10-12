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
		"content": `<style>.e9xqa_ico {
  cx: 14px;
  cy: 4.75px;
  r: 2px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hw49njbjl {
  d: path("M13 7.5L11.5 13m1-4.25L9 7L7 3.25m5.5 5.5l3.75 1.75L19 8.75M11.5 13l4 2.5l-.75 5.75M11.5 13l-4.25 2.5l-2 3.25");
}
</style><g class="hntgybcog"><circle class="e9xqa_ico"/><path class="hw49njbjl"/></g>`,
		"fallback": "iconoven:dance",
	});
}

export default Component;
