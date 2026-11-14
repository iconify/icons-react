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

.kaeh4oboj {
  d: path("M5 7.75v2a7 3 0 0 0 14 0v-2M2.5 19.5h19M5 19.5v-4h14v4");
}

.zkks6er1t {
  d: path("M5 7.75a7 3 0 1 0 14 0a7 3 0 1 0-14 0");
}
</style><g class="hntgybcog"><path class="zkks6er1t"/><path class="kaeh4oboj"/></g>`,
		"fallback": "uix:gift-tier-bronze",
	});
}

export default Component;
