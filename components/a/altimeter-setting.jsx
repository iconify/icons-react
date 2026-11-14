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

.lqp75bc3q {
  d: path("M12 18.5za1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5M7.25 7.75L5 6.5M12 5V2.5m4.75 5.25L19 6.5m-7 4L10 7m2 3.5h.01");
}

.ybpin5e7w {
  d: path("M4 10.5a8 8 0 1 0 16 0a8 8 0 1 0-16 0");
}
</style><g class="hntgybcog"><path class="ybpin5e7w"/><path class="lqp75bc3q"/></g>`,
		"fallback": "uix:altimeter-setting",
	});
}

export default Component;
