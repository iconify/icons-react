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

.r-yitcioh {
  d: path("M8 6.5h8A1.5 1.5 0 0 1 17.5 8v3a1.5 1.5 0 0 1-1.5 1.5H8A1.5 1.5 0 0 1 6.5 11V8A1.5 1.5 0 0 1 8 6.5");
}

.rgakeibuv {
  d: path("M5.625 3h12.75A2.625 2.625 0 0 1 21 5.625v7.75A2.625 2.625 0 0 1 18.375 16H5.625A2.625 2.625 0 0 1 3 13.375v-7.75A2.625 2.625 0 0 1 5.625 3M6 16l-1.5 4M18 16l1.5 4");
}
</style><g class="hntgybcog"><path class="rgakeibuv"/><path class="r-yitcioh"/></g>`,
		"fallback": "uix:enlarger-easel",
	});
}

export default Component;
