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

.nuaji0b-q {
  fill: currentColor;
  d: path("M14 9.5s-2.25-1.5-2.25-3c0-.75.6-1.25 1.25-1.25c.4 0 .75.25 1 .5c.25-.25.6-.5 1-.5c.65 0 1.25.5 1.25 1.25c0 1.5-2.25 3-2.25 3");
}

.xnprgksem {
  d: path("M8.5 12.25H11l1-1.5l1.5 2.75l1-1.25h5M9.5 15L5 19.5m-1.25-2zA1.25 1.25 0 0 1 5 18.75v1.5a1.25 1.25 0 0 1-1.25 1.25a1.25 1.25 0 0 1-1.25-1.25v-1.5a1.25 1.25 0 0 1 1.25-1.25");
}

.yovidbb1g {
  d: path("M10 2.5h8A3.5 3.5 0 0 1 21.5 6v5.5A3.5 3.5 0 0 1 18 15h-8a3.5 3.5 0 0 1-3.5-3.5V6A3.5 3.5 0 0 1 10 2.5");
}
</style><g class="hntgybcog"><path class="yovidbb1g"/><path class="nuaji0b-q"/><path class="xnprgksem"/></g>`,
		"fallback": "uix:heart-monitor",
	});
}

export default Component;
