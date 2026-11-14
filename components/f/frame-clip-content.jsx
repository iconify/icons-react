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
		"content": `<style>.cx9tvzb3z {
  d: path("M9.55 9.55a7 7 0 0 1 4.34-2.023m3.568.629a7 7 0 0 1 3.386 3.386m.629 3.568a7 7 0 0 1-2.023 4.34");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pnxazob4p {
  d: path("M5.125 2.5h6.75A2.625 2.625 0 0 1 14.5 5.125v6.75a2.625 2.625 0 0 1-2.625 2.625h-6.75A2.625 2.625 0 0 1 2.5 11.875v-6.75A2.625 2.625 0 0 1 5.125 2.5m9.375 19a7 7 0 0 1-7-7");
}
</style><g class="hntgybcog"><path class="pnxazob4p"/><path class="cx9tvzb3z"/></g>`,
		"fallback": "uix:frame-clip-content",
	});
}

export default Component;
