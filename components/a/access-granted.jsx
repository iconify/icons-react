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
		"content": `<style>.b4latebtc {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m14.75 16.75l1.5 1.5l2.75-3");
}

.b6sj3-bad {
  cx: 16.75px;
  cy: 16.75px;
  r: 4.5px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ndmyj0ctx {
  width: 11px;
  height: 18.5px;
  x: 3.75px;
  y: 2.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 1.5px;
}

.u5add9sjx {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11.25 11.5h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="ndmyj0ctx"/><path class="u5add9sjx"/><circle class="b6sj3-bad"/><path class="b4latebtc"/></g>`,
		"fallback": "iconoven:access-granted",
	});
}

export default Component;
