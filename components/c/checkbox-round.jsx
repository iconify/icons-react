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
		"content": `<style>.gutm8acqz {
  d: path("M2.5 12a5 5 0 1 0 10 0a5 5 0 1 0-10 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zr7bvmb3q {
  d: path("M5.25 12.25L7 14l2.75-3.5M16 12h5.5");
}
</style><g class="hntgybcog"><path class="gutm8acqz"/><path class="zr7bvmb3q"/></g>`,
		"fallback": "uix:checkbox-round",
	});
}

export default Component;
