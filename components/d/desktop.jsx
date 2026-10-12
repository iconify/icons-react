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
		"content": `<style>.bv6i5v-9c {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 14.25v4.5m-2.5 0h5");
}

.e8p7fybti {
  width: 10.5px;
  height: 9.5px;
  x: 2.75px;
  y: 4.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2px;
}

.p_gnhwivz {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18.5 16.75h.01");
}

.uca16cvvx {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M17.75 7.25h1.5");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.z7h2txzar {
  width: 5.5px;
  height: 16.5px;
  x: 15.75px;
  y: 3.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 1.5px;
}
</style><g class="y9tr6bcfx"><rect class="e8p7fybti"/><path class="bv6i5v-9c"/><rect class="z7h2txzar"/><path class="p_gnhwivz"/><path class="uca16cvvx"/></g>`,
		"fallback": "iconoven:desktop",
	});
}

export default Component;
