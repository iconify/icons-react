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
		"content": `<style>.ban680vpn {
  width: 11px;
  height: 18.5px;
  x: 2.75px;
  y: 2.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2px;
}

.jklof9byt {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M18.75 15.75V18h2l.5 2m-4.5-2.65a2.1 2.1 0 1 0 2.75 3.15");
}

.kq-ipxbat {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18.75 13.75h.01");
}

.tdu9k4yqw {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.25 2.75v18.5m9-15.75l2-2.25l2 2.25m-4 3.5l2 2.25l2-2.25");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="ban680vpn"/><path class="tdu9k4yqw"/><path class="kq-ipxbat"/><path class="jklof9byt"/></g>`,
		"fallback": "iconoven:elevator-access",
	});
}

export default Component;
