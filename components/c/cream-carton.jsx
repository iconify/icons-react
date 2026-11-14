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
		"content": `<style>.d78rtgbwj {
  d: path("M4.5 21.5v-11l4-4.5l4 4.5v11Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zv0mifbxv {
  d: path("M8.5 6h7l4 4.5v11h-7M8.5 6V3h7v3m-11 8h15m-15 4h15");
}
</style><g class="hntgybcog"><path class="d78rtgbwj"/><path class="zv0mifbxv"/></g>`,
		"fallback": "uix:cream-carton",
	});
}

export default Component;
