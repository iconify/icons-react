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
		"content": `<style>.b1kf5xm6x {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 18.5h.01m4.99 0h.01m4.99 0h.01");
}

.fc554k2sw {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 5.5V4.25a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1V5.5");
}

.qc4fixbgm {
  width: 10px;
  height: 7.5px;
  x: 7px;
  y: 5.5px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 1.5px;
}

.wa9biib3u {
  width: 18.5px;
  height: 4.5px;
  x: 2.75px;
  y: 16.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2.25px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="qc4fixbgm"/><path class="fc554k2sw"/><rect class="wa9biib3u"/><path class="b1kf5xm6x"/></g>`,
		"fallback": "iconoven:baggage-claim",
	});
}

export default Component;
