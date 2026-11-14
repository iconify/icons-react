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
		"content": `<style>.cfyoj_jqw {
  d: path("M2.5 10C5 5.5 14 5.5 17 10c-3 4.5-12 4.5-14.5 0");
}

.g_3i87pkq {
  fill: currentColor;
  d: path("M18 14.25a3.75 3.75 0 0 0 0 7.5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rnac67cfx {
  d: path("M7.5 10a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m6.75 8a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0");
}
</style><g class="hntgybcog"><path class="cfyoj_jqw"/><path class="rnac67cfx"/><path class="g_3i87pkq"/></g>`,
		"fallback": "uix:colour-blind-test",
	});
}

export default Component;
