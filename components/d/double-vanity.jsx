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

.mbc8bqgna {
  d: path("M4.5 9A2.75 2.25 0 0 0 10 9m4 0a2.75 2.25 0 0 0 5.5 0M7.25 9V6h2m7.5 3V6h2M3.5 14h17M12 14v7.5");
}

.w9em3ttnt {
  d: path("M2.5 9h19m-18 0v12.5h17V9");
}
</style><g class="hntgybcog"><path class="w9em3ttnt"/><path class="mbc8bqgna"/></g>`,
		"fallback": "uix:double-vanity",
	});
}

export default Component;
