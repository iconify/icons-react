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
		"content": `<style>.clg7v8flh {
  d: path("M14 17v-7a4 4 0 0 0-8 0v6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xalax7ehx {
  d: path("M3.5 13.5L6 16l2.5-2.5m9-9.5v16m3-16v16");
}
</style><g class="hntgybcog"><path class="clg7v8flh"/><path class="xalax7ehx"/></g>`,
		"fallback": "uix:da-capo",
	});
}

export default Component;
