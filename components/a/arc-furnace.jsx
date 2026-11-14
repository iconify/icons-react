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
		"content": `<style>.aiaz2ro_g {
  d: path("m12.75 14l-1.5 2.25h1.5l-1.5 2.25");
}

.f-58whual {
  d: path("M3 11h18c0 6-4 10-9 10s-9-4-9-10m5.5-8.5v12m7-12v12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="f-58whual"/><path class="aiaz2ro_g"/></g>`,
		"fallback": "uix:arc-furnace",
	});
}

export default Component;
