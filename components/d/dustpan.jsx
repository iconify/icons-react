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
		"content": `<style>.f6whmob8r {
  d: path("M5.758 20.5h12.484a1.75 1.75 0 0 0 1.584-2.495l-2.353-5A1.75 1.75 0 0 0 15.889 12H8.111a1.75 1.75 0 0 0-1.584 1.005l-2.353 5A1.75 1.75 0 0 0 5.758 20.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wa0ynbblm {
  d: path("M12 2.5zA1.5 1.5 0 0 1 13.5 4v6.5A1.5 1.5 0 0 1 12 12a1.5 1.5 0 0 1-1.5-1.5V4A1.5 1.5 0 0 1 12 2.5m-4.5 15h9");
}
</style><g class="hntgybcog"><path class="f6whmob8r"/><path class="wa0ynbblm"/></g>`,
		"fallback": "uix:dustpan",
	});
}

export default Component;
