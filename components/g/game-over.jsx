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
		"content": `<style>.t7je_8b6s {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8.5 9.25h.01m6.99 0h.01");
}

.uf-sov_ty {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 14.5a3.5 3.5 0 0 1 6 0m-3 3v3.75m-3.5 0h7");
}

.va6noebjq {
  width: 18.5px;
  height: 13.5px;
  x: 2.75px;
  y: 4px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2.5px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="va6noebjq"/><path class="t7je_8b6s"/><path class="uf-sov_ty"/></g>`,
		"fallback": "iconoven:game-over",
	});
}

export default Component;
