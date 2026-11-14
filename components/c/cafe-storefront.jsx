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
		"content": `<style>.by0hub7oo {
  d: path("m3 9l1.5-5h15L21 9Zm0 0a3 3 0 0 0 6 0a3 3 0 0 0 6 0a3 3 0 0 0 6 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jji-18bll {
  d: path("M9 20.5V15h6v5.5");
}

.zw_tpducc {
  d: path("M4.5 12v8.5h15V12");
}
</style><g class="hntgybcog"><path class="by0hub7oo"/><path class="zw_tpducc"/><path class="jji-18bll"/></g>`,
		"fallback": "uix:cafe-storefront",
	});
}

export default Component;
