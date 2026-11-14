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
		"content": `<style>.gwasdrbtx {
  d: path("M7.5 10L9 8.5l1.5 1.5m3 0L15 8.5l1.5 1.5m-9 3.5h9c0 2.5-2 4.25-4.5 4.25S7.5 16 7.5 13.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="gwasdrbtx"/></g>`,
		"fallback": "uix:emoji-laugh",
	});
}

export default Component;
