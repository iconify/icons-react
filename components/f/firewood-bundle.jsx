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

.oykp4mq7j {
  d: path("M3 15.75a4.5 4.5 0 1 1 9 0a4.5 4.5 0 1 1-9 0m3.5 0a1 1 0 1 1 2 0a1 1 0 1 1-2 0m5.5 0a4.5 4.5 0 1 1 9 0a4.5 4.5 0 1 1-9 0m3.5 0a1 1 0 1 1 2 0a1 1 0 1 1-2 0");
}

.srb2zobxe {
  d: path("M7.5 8a4.5 4.5 0 1 1 9 0a4.5 4.5 0 1 1-9 0M11 8a1 1 0 1 1 2 0a1 1 0 1 1-2 0m-8.5 4h19");
}
</style><g class="hntgybcog"><path class="oykp4mq7j"/><path class="srb2zobxe"/></g>`,
		"fallback": "uix:firewood-bundle",
	});
}

export default Component;
