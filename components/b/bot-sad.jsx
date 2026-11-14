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
		"content": `<style>.b__wpqzxp {
  d: path("M10.25 7h3.5a6.75 6.75 0 0 1 6.75 6.75a6.75 6.75 0 0 1-6.75 6.75h-3.5a6.75 6.75 0 0 1-6.75-6.75A6.75 6.75 0 0 1 10.25 7M12 2.5V7m-3.5 6.5h.01m6.99 0h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nyb76tj1k {
  d: path("M10 18c1-1.5 3-1.5 4 0");
}
</style><g class="hntgybcog"><path class="b__wpqzxp"/><path class="nyb76tj1k"/></g>`,
		"fallback": "uix:bot-sad",
	});
}

export default Component;
