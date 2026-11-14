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

.n7xxhsblq {
  d: path("M5.125 9h7.25A2.625 2.625 0 0 1 15 11.625v7.25a2.625 2.625 0 0 1-2.625 2.625h-7.25A2.625 2.625 0 0 1 2.5 18.875v-7.25A2.625 2.625 0 0 1 5.125 9");
}

.zjtlfgbmi {
  d: path("M8 15.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m3.5-1.5l5.25-5.25m.055-2.177l1.768-1.768a1.5 1.5 0 0 1 2.122 0a1.5 1.5 0 0 1 0 2.122l-1.768 1.768a1.5 1.5 0 0 1-2.122 0a1.5 1.5 0 0 1 0-2.122M5.5 18.5l3-1.5");
}
</style><g class="hntgybcog"><path class="n7xxhsblq"/><path class="zjtlfgbmi"/></g>`,
		"fallback": "uix:glass-cutter",
	});
}

export default Component;
