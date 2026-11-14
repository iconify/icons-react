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
		"content": `<style>.f_-_xvbte {
  d: path("M7 9.75c0-2 1.5-2.5 1.5-4.5m2 4.5c0-2 1.5-2.5 1.5-4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tw9lepb7u {
  d: path("M8 2.5h8a5 5 0 0 1 5 5a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5a5 5 0 0 1 5-5m4 10v2.25m0 0za1.75 1.75 0 0 1 1.75 1.75v3.25A1.75 1.75 0 0 1 12 21.5a1.75 1.75 0 0 1-1.75-1.75V16.5A1.75 1.75 0 0 1 12 14.75M16.5 2.5v10");
}
</style><g class="hntgybcog"><path class="tw9lepb7u"/><path class="f_-_xvbte"/></g>`,
		"fallback": "uix:fur-roller",
	});
}

export default Component;
