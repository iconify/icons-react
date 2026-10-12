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
		"content": `<style>.c4_hznbhj {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 2.75h10q.75 0 .75.75v10.75q0 .75.39 1.39l.72 1.22q.39.64.39 1.39v2.25q0 .75-.75.75h-13q-.75 0-.75-.75v-2.25q0-.75.39-1.39l.72-1.22q.39-.64.39-1.39V3.5q0-.75.75-.75");
}

.ep_kvmm9x {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 15h11.5M9.5 12v3");
}

.fe33edbjr {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.5 12h.01m4.99.25h.01");
}

.v6cy42zlv {
  width: 6.5px;
  height: 4px;
  x: 8.75px;
  y: 5.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 0.75px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="c4_hznbhj"/><rect class="v6cy42zlv"/><path class="ep_kvmm9x"/><path class="fe33edbjr"/></g>`,
		"fallback": "iconoven:arcade-machine",
	});
}

export default Component;
