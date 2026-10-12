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
		"content": `<style>.jbpncm7oy {
  width: 7px;
  height: 5.5px;
  x: 8.5px;
  y: 9px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 1.75px;
}

.sfv0sabsu {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10.75 11.75h.01m2.49 0h.01");
}

.t8xk-qhpr {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 2.75l6.6 2.45a1 1 0 0 1 .65.94v5.26c0 4.4-2.9 7.6-7.25 9.85C7.65 19 4.75 15.8 4.75 11.4V6.14a1 1 0 0 1 .65-.94ZM12 9V7");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="t8xk-qhpr"/><rect class="jbpncm7oy"/><path class="sfv0sabsu"/></g>`,
		"fallback": "iconoven:bot-shield",
	});
}

export default Component;
