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

.kuknfnbhx {
  d: path("M8.375 2.5h7.25A4.375 4.375 0 0 1 20 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375h-7.25A4.375 4.375 0 0 1 4 17.125V6.875A4.375 4.375 0 0 1 8.375 2.5");
}

.pm6c0klyh {
  d: path("M9.25 5.5h5.5a1.75 1.75 0 0 1 1.75 1.75v.5a1.75 1.75 0 0 1-1.75 1.75h-5.5A1.75 1.75 0 0 1 7.5 7.75v-.5A1.75 1.75 0 0 1 9.25 5.5M7 13.5h10m-7.5 0v5h5v-5");
}
</style><g class="hntgybcog"><path class="kuknfnbhx"/><path class="pm6c0klyh"/></g>`,
		"fallback": "uix:atm-hotel",
	});
}

export default Component;
