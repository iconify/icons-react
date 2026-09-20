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
		"content": `<style>.cf-dqybgk {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 17h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.d1nwz_brr {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M18 13v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k-jt90-vx {
  d: path("M11 20a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.k4j9-ccbl {
  d: path("M18 13v4");
}

.n5-apabry {
  d: path("M6 13v4");
}

.ok9ioqb8x {
  d: path("M4 17h16");
}

.wm7ubgban {
  fill: currentColor;
  d: path("M11 20a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.x9nhymbbq {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 13a6 6 0 0 1 12 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xd3fvew_d {
  d: path("M6 13a6 6 0 0 1 12 0");
}

.xej1gj6mt {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 13v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="wm7ubgban"/><path class="x9nhymbbq"/><path class="xej1gj6mt"/><path class="d1nwz_brr"/><path class="cf-dqybgk"/><path class="xd3fvew_d"/><path class="n5-apabry"/><path class="k4j9-ccbl"/><path class="ok9ioqb8x"/><path class="k-jt90-vx"/></g>`,
		"fallback": "iconmind:bell-duotone-thin",
	});
}

export default Component;
