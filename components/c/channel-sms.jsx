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
		"content": `<style>.c85j5tb5h {
  d: path("M9.375 2.5h5.25A4.375 4.375 0 0 1 19 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375h-5.25A4.375 4.375 0 0 1 5 17.125V6.875A4.375 4.375 0 0 1 9.375 2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m2961ebym {
  d: path("M7.75 7.75a1.5 1.5 0 0 1 1.5-1.5h5.5a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5H11L8.75 15.5v-2.25a1 1 0 0 1-1-1Zm2.5 2h3.5m-3.25 9h3");
}
</style><g class="hntgybcog"><path class="c85j5tb5h"/><path class="m2961ebym"/></g>`,
		"fallback": "uix:channel-sms",
	});
}

export default Component;
