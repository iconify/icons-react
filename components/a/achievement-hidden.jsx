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
		"content": `<style>.hku_3wucs {
  d: path("M5.5 15a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0m4-5.75L7 2.5m7.5 6.75L17 2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q2j62qnjb {
  d: path("M10 13.25a2 2 0 1 1 2 2V16m0 2.5h.01");
}
</style><g class="hntgybcog"><path class="hku_3wucs"/><path class="q2j62qnjb"/></g>`,
		"fallback": "uix:achievement-hidden",
	});
}

export default Component;
