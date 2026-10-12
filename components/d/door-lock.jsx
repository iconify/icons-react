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
		"content": `<style>.aez_6bchk {
  width: 9.5px;
  height: 18.5px;
  x: 2.75px;
  y: 2.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2px;
}

.ktc02ox-l {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.75 12h.01");
}

.l564_hbsx {
  width: 6.5px;
  height: 7.75px;
  x: 14.75px;
  y: 13.5px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 1.75px;
}

.ttqdtzbpf {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16.5 13.5V12a1.5 1.5 0 0 1 3 0v1.5");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="aez_6bchk"/><path class="ktc02ox-l"/><rect class="l564_hbsx"/><path class="ttqdtzbpf"/></g>`,
		"fallback": "iconoven:door-lock",
	});
}

export default Component;
