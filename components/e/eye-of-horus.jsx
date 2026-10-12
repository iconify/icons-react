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

.qjt_-6-zx {
  d: path("M9 16.14V21m6-4.86l2 3.1a1.75 1.75 0 1 0 3.1-1.6");
}

.rfut0e6ix {
  d: path("M3 11.5c4-8.25 14-8.25 18 0c-4 6.75-14 6.75-18 0");
}

.ycarrlbsj {
  cx: 12px;
  cy: 10.95px;
  r: 2.5px;
}
</style><g class="hntgybcog"><path class="rfut0e6ix"/><circle class="ycarrlbsj"/><path class="qjt_-6-zx"/></g>`,
		"fallback": "iconoven:eye-of-horus",
	});
}

export default Component;
