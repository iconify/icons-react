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
		"content": `<style>.eebq5s8vw {
  d: path("M5 16.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m5.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m5.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yvngtgbrt {
  d: path("M6 4h12a3.5 3.5 0 0 1 3.5 3.5V17a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 17V7.5A3.5 3.5 0 0 1 6 4m-3.5 8.5h19M7.25 4v8.5M12 4v8.5M16.75 4v8.5");
}
</style><g class="hntgybcog"><path class="yvngtgbrt"/><path class="eebq5s8vw"/></g>`,
		"fallback": "uix:cashier-tray-insert",
	});
}

export default Component;
