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

.i93y9wwiw {
  d: path("M12.25 21.5a9.5 9.5 0 1 1 9.25-9.25h-7.25a2 2 0 0 0-2 2Z");
}

.qlr89ib7s {
  d: path("M10.75 6.25v4.5h-3.5M18 15v6m-3-3h6");
}
</style><g class="hntgybcog"><path class="i93y9wwiw"/><path class="qlr89ib7s"/></g>`,
		"fallback": "uix:clock-plus",
	});
}

export default Component;
