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
		"content": `<style>.az4lpvzpv {
  d: path("M4 9.5V16c0 1.9 3.6 3.5 8 3.5s8-1.6 8-3.5V9.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oniw_300k {
  d: path("M4 9.5a8 3 0 1 0 16 0a8 3 0 1 0-16 0m5.5-3L5 2.5m9.5 4l4.5-4");
}
</style><g class="hntgybcog"><path class="az4lpvzpv"/><path class="oniw_300k"/></g>`,
		"fallback": "uix:drum-practice",
	});
}

export default Component;
