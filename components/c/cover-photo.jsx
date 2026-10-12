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
		"content": `<style>.h45tvc41r {
  cx: 7.5px;
  cy: 16.5px;
  r: 4px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l8g09tbkc {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.25 19.5h6.5");
}

.q85mm5_2q {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.25 12L15 9l2.25 2.25L18.5 10l2.25 2.25");
}

.t3g-tobka {
  width: 18.5px;
  height: 12.5px;
  x: 2.75px;
  y: 2.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2.5px;
}

.w205a0y0g {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.5 7h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="t3g-tobka"/><path class="q85mm5_2q"/><path class="w205a0y0g"/><circle class="h45tvc41r"/><path class="l8g09tbkc"/></g>`,
		"fallback": "iconoven:cover-photo",
	});
}

export default Component;
