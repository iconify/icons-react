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

.qw_qchbzl {
  d: path("m11.783 2.891l6.75 3.375a1.75 1.75 0 0 1 .967 1.566v6.336a1.75 1.75 0 0 1-.967 1.566l-6.75 3.375a1.75 1.75 0 0 1-1.566 0l-6.75-3.375a1.75 1.75 0 0 1-.967-1.566V7.832a1.75 1.75 0 0 1 .967-1.566l6.75-3.375a1.75 1.75 0 0 1 1.566 0");
}

.vzirhcbtt {
  d: path("M2.5 6.75L11 11l8.5-4.25M11 11v8.5m5.25-14.75L7.75 9.5");
}
</style><g class="hntgybcog"><path class="qw_qchbzl"/><path class="vzirhcbtt"/></g>`,
		"fallback": "uix:build-artifact",
	});
}

export default Component;
