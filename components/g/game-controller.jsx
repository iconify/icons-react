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
		"content": `<style>.g93rzkbmy {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M16.75 7.6h.01m1.59 1.6h.01m-1.61 1.6h.01m-1.61-1.6h.01");
}

.ks1tqkbqj {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 5.25h9a4 4 0 0 1 3.9 3.1l.8 7.9a2.5 2.5 0 0 1-4.3 2.2l-2.7-3.2H9.8l-2.7 3.2a2.5 2.5 0 0 1-4.3-2.2l.8-7.9a4 4 0 0 1 3.9-3.1M6 10h3M7.5 8.5v3");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="ks1tqkbqj"/><path class="g93rzkbmy"/></g>`,
		"fallback": "iconoven:game-controller",
	});
}

export default Component;
