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
		"content": `<style>.dif__6btx {
  d: path("M6 3h6.5A3.5 3.5 0 0 1 16 6.5v5a3.5 3.5 0 0 1-3.5 3.5H6a3.5 3.5 0 0 1-3.5-3.5v-5A3.5 3.5 0 0 1 6 3");
}

.fn8qnfaaz {
  d: path("m5.5 12l3.75-3.75L13 12m1.5 9.5v-2L20 14l2 2l-5.5 5.5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="dif__6btx"/><path class="fn8qnfaaz"/></g>`,
		"fallback": "uix:ai-image-edit",
	});
}

export default Component;
