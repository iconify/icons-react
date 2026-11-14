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

.qrech44rr {
  d: path("M8 9.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m7 8.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m-1 0h8m-4-4v8");
}

.w-cd1pbsv {
  d: path("M12.787 15.353A10.5 10.5 0 0 1 11 15.5c-4 0-6.75-2-8.5-6c1.75-4 4.5-6 8.5-6s6.75 2 8.5 6q-.417.953-.91 1.754");
}
</style><g class="hntgybcog"><path class="w-cd1pbsv"/><path class="qrech44rr"/></g>`,
		"fallback": "uix:eye-tracking-ai",
	});
}

export default Component;
