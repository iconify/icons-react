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
		"content": `<style>.hmgqhcb3f {
  d: path("M6.875 4.5h10.25A4.375 4.375 0 0 1 21.5 8.875v3.75A4.375 4.375 0 0 1 17.125 17H6.875A4.375 4.375 0 0 1 2.5 12.625v-3.75A4.375 4.375 0 0 1 6.875 4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xhh9a108p {
  d: path("M7 17v-5a1.5 1.5 0 0 1 1.5-1.5h7A1.5 1.5 0 0 1 17 12v5M5 17v3.5M19 17v3.5");
}
</style><g class="hntgybcog"><path class="hmgqhcb3f"/><path class="xhh9a108p"/></g>`,
		"fallback": "uix:club-chair",
	});
}

export default Component;
