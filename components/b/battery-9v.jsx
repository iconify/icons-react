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
		"content": `<style>.adhyun7ou {
  d: path("m9.5 10.5l2.5 5l2.5-5");
}

.h9ra9_b3j {
  d: path("M10 6h4a3.5 3.5 0 0 1 3.5 3.5V18a3.5 3.5 0 0 1-3.5 3.5h-4A3.5 3.5 0 0 1 6.5 18V9.5A3.5 3.5 0 0 1 10 6m-.75-2.75V6m5.5-2.75V6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="h9ra9_b3j"/><path class="adhyun7ou"/></g>`,
		"fallback": "uix:battery-9v",
	});
}

export default Component;
