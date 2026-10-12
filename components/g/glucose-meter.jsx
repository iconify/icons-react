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
		"content": `<style>.cly76qbyd {
  width: 13px;
  height: 13px;
  x: 4.75px;
  y: 8.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 3px;
}

.gj35l1bcp {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M19 2.75c1 1.3 2 2.3 2 3.4a2 2 0 0 1-4 0c0-1.1 1-2.1 2-3.4");
}

.l5m6etbzo {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.75 11.25h7v3.5h-7Z");
}

.ouz6u8bkn {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11.25 18h.01");
}

.xrumllb0s {
  width: 2.5px;
  height: 4.75px;
  x: 10.75px;
  y: 3.5px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 0.75px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="xrumllb0s"/><rect class="cly76qbyd"/><path class="l5m6etbzo"/><path class="ouz6u8bkn"/><path class="gj35l1bcp"/></g>`,
		"fallback": "iconoven:glucose-meter",
	});
}

export default Component;
