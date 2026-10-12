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
		"content": `<style>.jvrnx2_0k {
  cx: 12px;
  cy: 12px;
  r: 5.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k6j_-bejo {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 7.5V5.75a2.5 2.5 0 0 1 2.5-2.5H7.5m9 0h1.75a2.5 2.5 0 0 1 2.5 2.5V7.5m0 9v1.75a2.5 2.5 0 0 1-2.5 2.5H16.5m-9 0H5.75a2.5 2.5 0 0 1-2.5-2.5V16.5");
}

.mmqjqabml {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.25 13.85c1 .9 2.5.9 3.5 0");
}

.nzxsyubwa {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10.25 11h.01m3.49 0h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="k6j_-bejo"/><circle class="jvrnx2_0k"/><path class="nzxsyubwa"/><path class="mmqjqabml"/></g>`,
		"fallback": "iconoven:face-detect",
	});
}

export default Component;
