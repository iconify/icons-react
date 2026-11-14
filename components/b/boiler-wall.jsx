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
		"content": `<style>.atf7ptb0l {
  d: path("M3 3v18.5m5.625-16h6.25A2.625 2.625 0 0 1 17.5 8.125v7.75a2.625 2.625 0 0 1-2.625 2.625h-6.25A2.625 2.625 0 0 1 6 15.875v-7.75A2.625 2.625 0 0 1 8.625 5.5m5.875 0V3h6m-8.75 15.5v3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oi801sqix {
  d: path("M10 10.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}
</style><g class="hntgybcog"><path class="atf7ptb0l"/><path class="oi801sqix"/></g>`,
		"fallback": "uix:boiler-wall",
	});
}

export default Component;
