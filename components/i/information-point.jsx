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
		"content": `<style>.l3j0385pd {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 8.5v2.75m0 2.5v7.5m-3.5 0h7");
}

.tsdqsjo2p {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 5.75h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zen4tebxt {
  width: 15.5px;
  height: 11px;
  x: 4.25px;
  y: 2.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2px;
}
</style><g class="y9tr6bcfx"><rect class="zen4tebxt"/><path class="tsdqsjo2p"/><path class="l3j0385pd"/></g>`,
		"fallback": "iconoven:information-point",
	});
}

export default Component;
