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
		"content": `<style>.ckrrslqvc {
  d: path("M2.5 6a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0");
}

.d7-f6pt1z {
  d: path("M6 9.5c0 10 4 9 8 9m1.75-2h1a1.75 1.75 0 0 1 1.75 1.75v.5a1.75 1.75 0 0 1-1.75 1.75h-1A1.75 1.75 0 0 1 14 18.75v-.5a1.75 1.75 0 0 1 1.75-1.75M6 6h.01M18.5 18.5H21");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="ckrrslqvc"/><path class="d7-f6pt1z"/></g>`,
		"fallback": "uix:cable-release",
	});
}

export default Component;
