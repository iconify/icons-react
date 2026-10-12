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
		"content": `<style>.gj0_ekbpo {
  cx: 9px;
  cy: 11px;
  r: 2px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kjxad3akd {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.75 11.5h.01m5.99 0h.01");
}

.xkuc3nbhq {
  cx: 15px;
  cy: 11px;
  r: 2px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.z5aer9bsr {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 20.75V11a7.5 7.5 0 0 1 15 0v9.75l-2.5-2l-2.5 2l-2.5-2l-2.5 2l-2.5-2Z");
}
</style><g class="y9tr6bcfx"><path class="z5aer9bsr"/><circle class="gj0_ekbpo"/><circle class="xkuc3nbhq"/><path class="kjxad3akd"/></g>`,
		"fallback": "iconoven:ghost-game",
	});
}

export default Component;
