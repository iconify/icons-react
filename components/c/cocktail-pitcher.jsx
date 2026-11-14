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

.kuv7mwbcm {
  d: path("M15.5 10.5h3a2 2 0 0 1 2 2V15a2 2 0 0 1-2 2H17m-6.5-6L16 2.5");
}

.xs0dy5rzx {
  d: path("M5.5 5.5L8 8c0 2-3 4-3 7.5v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-4C17 12 14 10 14 8V5.5Z");
}
</style><g class="hntgybcog"><path class="xs0dy5rzx"/><path class="kuv7mwbcm"/></g>`,
		"fallback": "uix:cocktail-pitcher",
	});
}

export default Component;
