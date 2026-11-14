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

.rfl0cwb4z {
  d: path("M11.75 12.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0");
}

.zrk880dkh {
  d: path("M6 6h12a3.5 3.5 0 0 1 3.5 3.5v6A3.5 3.5 0 0 1 18 19H6a3.5 3.5 0 0 1-3.5-3.5v-6A3.5 3.5 0 0 1 6 6m-3.5 5l5-5m-5 9l9-9");
}
</style><g class="hntgybcog"><path class="zrk880dkh"/><path class="rfl0cwb4z"/></g>`,
		"fallback": "uix:camera-disposable",
	});
}

export default Component;
