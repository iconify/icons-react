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
		"content": `<style>.dcwzxnz_k {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.5 6.75h.01m2.49 0h.01m2.49 0h.01M9.5 9.25h.01m2.49 0h.01m2.49 0h.01");
}

.ibbdhhbdd {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.25 13h1.5q.75 0 .7.75l-.4 6.75q-.05.75-.8.75h-.5q-.75 0-.8-.75l-.4-6.75q-.05-.75.7-.75");
}

.l3-2q7pfh {
  width: 10px;
  height: 10.25px;
  x: 7px;
  y: 2.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2.5px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="l3-2q7pfh"/><path class="ibbdhhbdd"/><path class="dcwzxnz_k"/></g>`,
		"fallback": "iconoven:hair-brush",
	});
}

export default Component;
