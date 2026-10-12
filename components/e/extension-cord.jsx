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
		"content": `<style>.c0aekmeqx {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 19.75V20A1.25 1.25 0 0 0 8 21.25h7a2.75 2.75 0 0 0 2.75-2.75v-7.75");
}

.c0ld3hb7i {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M16.5 7.25h.01m2.49 0h.01");
}

.gvicxrb4c {
  width: 7px;
  height: 7px;
  x: 14.25px;
  y: 3.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2px;
}

.nrcl2ob7x {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 13.25h6v3.5a3 3 0 0 1-6 0Zm1.75-3.5v3.5M8 9.75v3.5");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="nrcl2ob7x"/><path class="c0aekmeqx"/><rect class="gvicxrb4c"/><path class="c0ld3hb7i"/></g>`,
		"fallback": "iconoven:extension-cord",
	});
}

export default Component;
