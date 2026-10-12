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
		"content": `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.g6ixj6bxw {
  cx: 9px;
  cy: 9.5px;
  r: 1.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j87kh1brz {
  cx: 15px;
  cy: 9.5px;
  r: 1.5px;
}

.npy51_chq {
  d: path("M10.75 16.5h2.5m-8-2l1-1.25M7.5 14.5l1-1.25m7 1.25l1-1.25m1.25 1.25l1-1.25");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><circle class="g6ixj6bxw"/><circle class="j87kh1brz"/><path class="npy51_chq"/></g>`,
		"fallback": "iconoven:face-sweat",
	});
}

export default Component;
