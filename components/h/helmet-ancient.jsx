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
		"content": `<style>.ckgexktlo {
  d: path("M17.75 8.75C19 2.5 9 1 3.5 5.5c2 0 3 1.5 2.75 3.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tszvtglof {
  d: path("M4.5 18.5v-5a7.5 7.5 0 0 1 15 0V15h-5v2l2 4h-5L10 18.5Z");
}
</style><g class="hntgybcog"><path class="tszvtglof"/><path class="ckgexktlo"/></g>`,
		"fallback": "uix:helmet-ancient",
	});
}

export default Component;
