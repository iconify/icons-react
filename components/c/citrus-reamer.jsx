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
		"content": `<style>.dkr-4zb2f {
  d: path("M3.5 14h17a8.5 6.5 0 0 1-17 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i2l4mkb8q {
  d: path("M10.585 14h2.83a1.75 1.75 0 0 0 1.625-2.4l-1.415-3.538a1.75 1.75 0 0 0-3.25 0L8.96 11.6a1.75 1.75 0 0 0 1.625 2.4M12 7.5V14");
}
</style><g class="hntgybcog"><path class="dkr-4zb2f"/><path class="i2l4mkb8q"/></g>`,
		"fallback": "uix:citrus-reamer",
	});
}

export default Component;
