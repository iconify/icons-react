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
		"content": `<style>.gcp84n0uq {
  d: path("M8.75 8.25V6.5a1.75 1.75 0 0 1 1.75-1.75h3a1.75 1.75 0 0 1 1.75 1.75v1.75M2.75 12h18.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sz7o-pbpi {
  cx: 12px;
  cy: 16.25px;
  r: 2px;
}

.wrqvllj2c {
  width: 18.5px;
  height: 12.5px;
  x: 2.75px;
  y: 8.25px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="wrqvllj2c"/><path class="gcp84n0uq"/><circle class="sz7o-pbpi"/></g>`,
		"fallback": "iconoven:camera-bag",
	});
}

export default Component;
