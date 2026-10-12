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
		"content": `<style>.p43tuyt8p {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 13.5c1.4 0 1.4-1 2.75-1s1.4 1 2.75 1s1.4-1 2.75-1s1.4 1 2.75 1s1.4-1 2.75-1s1.4 1 2.75 1");
}

.qphoi8ljw {
  width: 18px;
  height: 5px;
  x: 3px;
  y: 4.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2.5px;
}

.u8k2u_big {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.5 7.25h.01m4.49 0h.01m4.49 0h.01");
}

.xlb7gq1yu {
  width: 18px;
  height: 5px;
  x: 3px;
  y: 16.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2.5px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="qphoi8ljw"/><path class="u8k2u_big"/><path class="p43tuyt8p"/><rect class="xlb7gq1yu"/></g>`,
		"fallback": "iconoven:bagel",
	});
}

export default Component;
