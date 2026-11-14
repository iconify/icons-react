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

.k9kbivbar {
  d: path("M6 3.5h12A3.5 3.5 0 0 1 21.5 7v6a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 13V7A3.5 3.5 0 0 1 6 3.5m6 13v4m-4 0h8");
}

.wh4ffxb6z {
  d: path("M5.5 12.5H8l2-5l2.5 5.5L15 9l1.5 2h2");
}
</style><g class="hntgybcog"><path class="k9kbivbar"/><path class="wh4ffxb6z"/></g>`,
		"fallback": "uix:cpu-profile",
	});
}

export default Component;
