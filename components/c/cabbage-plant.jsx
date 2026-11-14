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
		"content": `<style>.fyrlk0i8z {
  d: path("M5.5 9a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pu57_bcom {
  d: path("M7.5 13.75c2-5.25 4.5-7.75 9-9.5M12 15.5v3m0 0c-3 3-7 3-9 0c3-1.5 6.5-1.5 9 0m0 0c3 3 7 3 9 0c-3-1.5-6.5-1.5-9 0");
}
</style><g class="hntgybcog"><path class="fyrlk0i8z"/><path class="pu57_bcom"/></g>`,
		"fallback": "uix:cabbage-plant",
	});
}

export default Component;
