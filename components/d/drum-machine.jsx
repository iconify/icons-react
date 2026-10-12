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
		"content": `<style>.b5pebvmua {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.25 14.75h1m2.5 0h1m2.5 0h1m2.5 0h1");
}

.fdtrm7b0s {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.75 9.25h3.5");
}

.mhm7ccc0x {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.75 9.25h.01m3.49 0h.01");
}

.o0xk3dbag {
  width: 18.5px;
  height: 12.5px;
  x: 2.75px;
  y: 5.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2.5px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="o0xk3dbag"/><path class="mhm7ccc0x"/><path class="fdtrm7b0s"/><path class="b5pebvmua"/></g>`,
		"fallback": "iconoven:drum-machine",
	});
}

export default Component;
