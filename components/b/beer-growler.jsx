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
		"content": `<style>.hl08l0apc {
  d: path("M14.5 4H16a2 2 0 0 1 2 2v4.5m-7.75 2h3.5a1.75 1.75 0 0 1 1.75 1.75v1.5a1.75 1.75 0 0 1-1.75 1.75h-3.5a1.75 1.75 0 0 1-1.75-1.75v-1.5a1.75 1.75 0 0 1 1.75-1.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pv8wodgif {
  d: path("M9.5 2.5h5V5c0 1.5 3.5 2.5 3.5 5.5v9a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 19.5v-9c0-3 3.5-4 3.5-5.5Z");
}
</style><g class="hntgybcog"><path class="pv8wodgif"/><path class="hl08l0apc"/></g>`,
		"fallback": "uix:beer-growler",
	});
}

export default Component;
