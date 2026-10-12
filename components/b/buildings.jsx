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
		"content": `<style>.l_edo6bjq {
  width: 6px;
  height: 12.5px;
  x: 14.75px;
  y: 8.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 1.5px;
}

.qmypepvbg {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.25 7h.01m2.99 0h.01m-3.01 4h.01m2.99 0h.01m-3.01 4h.01m2.99 0h.01m8.49-2.25h.01m-.01 3.75h.01");
}

.tlnu1m3wo {
  width: 9px;
  height: 18.5px;
  x: 3.25px;
  y: 2.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="tlnu1m3wo"/><rect class="l_edo6bjq"/><path class="qmypepvbg"/></g>`,
		"fallback": "iconoven:buildings",
	});
}

export default Component;
