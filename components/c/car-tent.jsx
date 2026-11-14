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

.pc3tomb7n {
  d: path("M2.5 17v-2A1.5 1.5 0 0 1 4 13.5h2.5l2-2.5h7l2.5 2.5h2a1.5 1.5 0 0 1 1.5 1.5v2Z");
}

.pypz9pywd {
  d: path("M5 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M8 8l4-5.5L16 8v3H8Zm0 0h8");
}
</style><g class="hntgybcog"><path class="pc3tomb7n"/><path class="pypz9pywd"/></g>`,
		"fallback": "uix:car-tent",
	});
}

export default Component;
