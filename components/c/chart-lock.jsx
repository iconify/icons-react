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
		"content": `<style>.e7ipk_pvh {
  d: path("M6.5 14L10 8.5l3 2.5l6-6.5m-2.75 13h3.5a1.75 1.75 0 0 1 1.75 1.75v1A1.75 1.75 0 0 1 19.75 22h-3.5a1.75 1.75 0 0 1-1.75-1.75v-1a1.75 1.75 0 0 1 1.75-1.75m0 0v-1.25a1.75 1.75 0 0 1 3.5 0v1.25");
}

.guqqttbir {
  d: path("M3.5 3v17.5h8.2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="guqqttbir"/><path class="e7ipk_pvh"/></g>`,
		"fallback": "uix:chart-lock",
	});
}

export default Component;
