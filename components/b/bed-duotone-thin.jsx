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
		"content": `<style>.bx9u4o00v {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 18v2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.c7-22ebqd {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 11V7h6v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.et-iwmblh {
  d: path("M2 18v-7h20v7");
}

.f0qz9mbvk {
  d: path("M4 11V7h6v4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ke8s6xb3g {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M2 14h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nqnw98byf {
  d: path("M2 14h20");
}

.qvu33mb1p {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M21 18v2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.t3iybibvf {
  d: path("M3 18v2.5");
}

.wbz8a-gmi {
  d: path("M21 18v2.5");
}

.zdeiv7bia {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M2 18v-7h20v7");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="zdeiv7bia"/><path class="ke8s6xb3g"/><path class="c7-22ebqd"/><path class="bx9u4o00v"/><path class="qvu33mb1p"/><path class="et-iwmblh"/><path class="nqnw98byf"/><path class="f0qz9mbvk"/><path class="t3iybibvf"/><path class="wbz8a-gmi"/></g>`,
		"fallback": "iconmind:bed-duotone-thin",
	});
}

export default Component;
