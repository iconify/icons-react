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
		"content": `<style>.eqsjy2osn {
  d: path("m10.714 7.896l3.182-3.182a2.75 2.75 0 0 1 3.89 0a2.75 2.75 0 0 1 0 3.89l-3.182 3.182a2.75 2.75 0 0 1-3.89 0a2.75 2.75 0 0 1 0-3.89M15 16.25h6m-1.75-1.75L21 16.25m0 3.5h-6m1.75 1.75L15 19.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mpswi5art {
  d: path("m4.714 13.896l3.182-3.182a2.75 2.75 0 0 1 3.89 0a2.75 2.75 0 0 1 0 3.89l-3.182 3.182a2.75 2.75 0 0 1-3.89 0a2.75 2.75 0 0 1 0-3.89");
}
</style><g class="hntgybcog"><path class="mpswi5art"/><path class="eqsjy2osn"/></g>`,
		"fallback": "uix:chain-switch",
	});
}

export default Component;
