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
		"content": `<style>.c0yewh3tu {
  cx: 4px;
  cy: 20px;
  r: 1.25px;
}

.g_r9k1kci {
  cx: 6.75px;
  cy: 15.75px;
  r: 1.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p75jvb5ex {
  d: path("M15 5q.36 2.64 3 3q-2.64.36-3 3q-.36-2.64-3-3q2.64-.36 3-3");
}

.rm929_bat {
  width: 12.5px;
  height: 10.5px;
  x: 8.75px;
  y: 2.75px;
  rx: 5.25px;
}
</style><g class="hntgybcog"><rect class="rm929_bat"/><circle class="g_r9k1kci"/><circle class="c0yewh3tu"/><path class="p75jvb5ex"/></g>`,
		"fallback": "iconoven:chain-of-thought",
	});
}

export default Component;
