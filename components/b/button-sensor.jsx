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
		"content": `<style>.ea-5vuqtr {
  d: path("M7.5 13.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m6.42-9.397a10 10 0 0 1 5.977 5.977M17 2.242A13 13 0 0 1 21.758 7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nlxgblior {
  d: path("M3.5 13.5a7 7 0 1 0 14 0a7 7 0 1 0-14 0");
}
</style><g class="hntgybcog"><path class="nlxgblior"/><path class="ea-5vuqtr"/></g>`,
		"fallback": "uix:button-sensor",
	});
}

export default Component;
