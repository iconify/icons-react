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
		"content": `<style>.a544zhb2j {
  d: path("M7.25 5.5h4.5a1.75 1.75 0 0 1 1.75 1.75v1A1.75 1.75 0 0 1 11.75 10h-4.5A1.75 1.75 0 0 1 5.5 8.25v-1A1.75 1.75 0 0 1 7.25 5.5M9 10h1a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 10 12.5H9a1.25 1.25 0 0 1-1.25-1.25A1.25 1.25 0 0 1 9 10m4.5 6a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yqwllmqht {
  d: path("M6 2.5h12A3.5 3.5 0 0 1 21.5 6v12a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 18V6A3.5 3.5 0 0 1 6 2.5");
}
</style><g class="hntgybcog"><path class="yqwllmqht"/><path class="a544zhb2j"/></g>`,
		"fallback": "uix:flat-lay",
	});
}

export default Component;
