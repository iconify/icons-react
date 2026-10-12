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
		"content": `<style>.c_pvp7bsw {
  cx: 8.5px;
  cy: 11.5px;
  r: 1.75px;
}

.lv0lhdc4y {
  cx: 11.75px;
  cy: 16.25px;
  r: 1.25px;
}

.pnlbaejag {
  cx: 18.75px;
  cy: 4.75px;
  r: 2px;
}

.vi3y44igt {
  d: path("m4.21 9.29l1.33-1.58L7 6l2.24.19l1.52.12L13 6.5l1.59 1.59l1.32 1.32L17.5 11l-.34 2.22l-.32 2.06l-.34 2.22l-1.91 1.19l-2.18 1.37l-1.91 1.19l-2.05-.94l-1.9-.87l-2.05-.94l-.51-2.19l-.73-3.12L2.75 11z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="vi3y44igt"/><circle class="c_pvp7bsw"/><circle class="lv0lhdc4y"/><circle class="pnlbaejag"/></g>`,
		"fallback": "iconoven:asteroid-sharp",
	});
}

export default Component;
