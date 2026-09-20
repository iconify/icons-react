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
		"content": `<style>.c7dgfu7wx {
  d: path("M2 4h20");
}

.d3kpl_b4o {
  d: path("M5 9a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.ek759fs3g {
  d: path("M7 4v3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j1r6lye6q {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M17 4v3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.lgv7os48g {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 18h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ljo-5rbrq {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M2 4h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.o8od38cnm {
  d: path("M4 18h16");
}

.od769abab {
  d: path("M17 4v3");
}

.pj7ux4r4p {
  d: path("M15 9a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.wjuupqz4l {
  fill: currentColor;
  d: path("M15 9a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.xnwdi1b1d {
  fill: currentColor;
  d: path("M5 9a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.xq6cr1wna {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M7 4v3");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="xnwdi1b1d"/><path class="wjuupqz4l"/><path class="ljo-5rbrq"/><path class="xq6cr1wna"/><path class="j1r6lye6q"/><path class="lgv7os48g"/><path class="c7dgfu7wx"/><path class="ek759fs3g"/><path class="d3kpl_b4o"/><path class="od769abab"/><path class="pj7ux4r4p"/><path class="o8od38cnm"/></g>`,
		"fallback": "iconmind:event-stage-duotone-thin",
	});
}

export default Component;
