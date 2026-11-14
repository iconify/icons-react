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

.kq7-4cbvs {
  d: path("M8 2.5h3A3.5 3.5 0 0 1 14.5 6v12a3.5 3.5 0 0 1-3.5 3.5H8A3.5 3.5 0 0 1 4.5 18V6A3.5 3.5 0 0 1 8 2.5M9.5 5h.01M9.5 19h.01");
}

.sgazyz7ng {
  d: path("M5.75 12a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0m3.75-1.75v2m0 1.75h.01m5.735-6.821a7.5 7.5 0 0 1 0 9.642M18.593 6.75a10.5 10.5 0 0 1 0 10.5");
}
</style><g class="hntgybcog"><path class="kq7-4cbvs"/><path class="sgazyz7ng"/></g>`,
		"fallback": "uix:call-for-help-button",
	});
}

export default Component;
