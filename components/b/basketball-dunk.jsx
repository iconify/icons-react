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

.mq543pbmp {
  d: path("M3.75 8.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M8 12.75l8.25-5.5M8 12.75L9 17m-3.5 4L9 17l3.5 3.5m3.75-13.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0");
}

.qzxgnzbmc {
  d: path("M16 9.5h5m-4.5 0l.75 4h2.5l.75-4");
}
</style><g class="hntgybcog"><path class="mq543pbmp"/><path class="qzxgnzbmc"/></g>`,
		"fallback": "uix:basketball-dunk",
	});
}

export default Component;
