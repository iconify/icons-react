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
		"content": `<style>.gspo7vi8k {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.25 15.75c0-2.75 1.5-4.5 2.5-6c-1.5.25-3.25.75-4.5 2L4.5 9.5C6 6.75 8.25 4.25 12.25 3.75l.75-1L14.25 4c2.5 1.25 4.25 4 4.25 7.5v4.25Z");
}

.hot5z2l8m {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11.75 7h.01");
}

.wnbt1yjbc {
  width: 14px;
  height: 3px;
  x: 5px;
  y: 18.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 1.25px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="gspo7vi8k"/><path class="hot5z2l8m"/><rect class="wnbt1yjbc"/></g>`,
		"fallback": "iconoven:chess-knight",
	});
}

export default Component;
