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

.ka_sebbhx {
  d: path("M9 13a3.5 3.5 0 1 1 3.5-3.5m3 0c3 0 4 1.5 4 3.5v2m-.75 0h1.5A1.75 1.75 0 0 1 22 16.75v.5A1.75 1.75 0 0 1 20.25 19h-1.5A1.75 1.75 0 0 1 17 17.25v-.5A1.75 1.75 0 0 1 18.75 15M18 19v2.5m3-2.5v2.5");
}

.o967cnlqg {
  d: path("M2.5 9.5a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0");
}
</style><g class="hntgybcog"><path class="o967cnlqg"/><path class="ka_sebbhx"/></g>`,
		"fallback": "uix:ev-cable-storage",
	});
}

export default Component;
