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

.itocrrw1d {
  d: path("M7.125 3.5h9.75A2.625 2.625 0 0 1 19.5 6.125v5.75a2.625 2.625 0 0 1-2.625 2.625h-9.75A2.625 2.625 0 0 1 4.5 11.875v-5.75A2.625 2.625 0 0 1 7.125 3.5");
}

.xj373459m {
  d: path("M9.904 14.5h4.192a1.255 1.255 0 0 1 1.154 1.75l-.36.841a1.5 1.5 0 0 1-1.379.909h-3.022a1.5 1.5 0 0 1-1.379-.909l-.36-.841a1.255 1.255 0 0 1 1.154-1.75M12 18v3.5m-3.5-18V7M12 3.5V7m3.5-3.5V7");
}
</style><g class="hntgybcog"><path class="itocrrw1d"/><path class="xj373459m"/></g>`,
		"fallback": "uix:adapter-ethernet",
	});
}

export default Component;
