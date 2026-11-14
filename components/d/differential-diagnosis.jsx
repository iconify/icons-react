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
		"content": `<style>.asi79cb2i {
  fill: currentColor;
  d: path("M16 5.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m1 6.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-1 6.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lvy3hlsgp {
  d: path("M2.5 12H9m0 0l6-6m-6 6h6.5M9 12l6 6");
}
</style><g class="hntgybcog"><path class="lvy3hlsgp"/><path class="asi79cb2i"/></g>`,
		"fallback": "uix:differential-diagnosis",
	});
}

export default Component;
