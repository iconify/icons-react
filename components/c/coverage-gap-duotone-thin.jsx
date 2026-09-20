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
		"content": `<style>.d6cu3qpew {
  d: path("M17 3h4v18h-4");
}

.eh---ab1x {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M17 3h4v18h-4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ldodvk1_f {
  d: path("M7 3H3v18h4");
}

.mzjqjtrpb {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M8 9h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.o-mqg3b8q {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m13.5 12.5 -3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.pty_wsbvs {
  d: path("M8 9h8");
}

.r1p5_ebae {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M7 3H3v18h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s2pzwwb8y {
  d: path("m10.5 12.5 3 3");
}

.s4_6dccau {
  d: path("m13.5 12.5 -3 3");
}

.u5adh3bsd {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m10.5 12.5 3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="r1p5_ebae"/><path class="eh---ab1x"/><path class="mzjqjtrpb"/><path class="u5adh3bsd"/><path class="o-mqg3b8q"/><path class="ldodvk1_f"/><path class="d6cu3qpew"/><path class="pty_wsbvs"/><path class="s2pzwwb8y"/><path class="s4_6dccau"/></g>`,
		"fallback": "iconmind:coverage-gap-duotone-thin",
	});
}

export default Component;
