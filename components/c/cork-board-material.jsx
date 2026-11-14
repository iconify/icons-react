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
		"content": `<style>.h8zm1elku {
  d: path("M7.375 4h9.25A4.375 4.375 0 0 1 21 8.375v8.25A4.375 4.375 0 0 1 16.625 21h-9.25A4.375 4.375 0 0 1 3 16.625v-8.25A4.375 4.375 0 0 1 7.375 4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vvuwsmbdi {
  d: path("M9.5 7h5l-1 3l1.5 2H9l1.5-2Zm2.5 5v3.5m-5 2h.01M17 17h.01");
}
</style><g class="hntgybcog"><path class="h8zm1elku"/><path class="vvuwsmbdi"/></g>`,
		"fallback": "uix:cork-board-material",
	});
}

export default Component;
