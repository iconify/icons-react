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

.mz9o5bj8f {
  d: path("M6 6.75h12a3.5 3.5 0 0 1 3.5 3.5v3.5a3.5 3.5 0 0 1-3.5 3.5H6a3.5 3.5 0 0 1-3.5-3.5v-3.5A3.5 3.5 0 0 1 6 6.75");
}

.wbme2eb2e {
  d: path("M5.75 12V9.75h2.5m10 2.25v2.25h-2.5");
}
</style><g class="hntgybcog"><path class="mz9o5bj8f"/><path class="wbme2eb2e"/></g>`,
		"fallback": "uix:aspect-ratio-16-9",
	});
}

export default Component;
