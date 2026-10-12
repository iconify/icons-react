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
		"content": `<style>.azfkbib2o {
  cx: 15.75px;
  cy: 8.5px;
  r: 2.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.c7x6ymbwt {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.75 11.25v10m0-4.75h2.5m-2.5 3h2");
}

.pgm-xqblx {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 2.75a3 3 0 1 1 0 6a3 3 0 1 1 0-6M3.96 12.79l2.08-2.08q.71-.71 1.42 0l2.08 2.08q.71.71.71 1.71v5.75q0 1-1 1h-5q-1 0-1-1V14.5q0-1 .71-1.71");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zubaqinwb {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.75 14h.01");
}
</style><g class="y9tr6bcfx"><path class="pgm-xqblx"/><path class="zubaqinwb"/><circle class="azfkbib2o"/><path class="c7x6ymbwt"/></g>`,
		"fallback": "iconoven:house-key-tag",
	});
}

export default Component;
