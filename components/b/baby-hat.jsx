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

.kmf8o-20s {
  d: path("M10.5 4a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.ua_heq3hr {
  d: path("M5 15v-2.5a7 7 0 0 1 14 0V15M6.5 15h11a3 3 0 0 1 3 3a3 3 0 0 1-3 3h-11a3 3 0 0 1-3-3a3 3 0 0 1 3-3");
}
</style><g class="hntgybcog"><path class="ua_heq3hr"/><path class="kmf8o-20s"/></g>`,
		"fallback": "uix:baby-hat",
	});
}

export default Component;
