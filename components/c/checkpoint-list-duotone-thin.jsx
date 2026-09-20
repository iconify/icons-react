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
		"content": `<style>.a3fwgxb1c {
  d: path("M9 11.5h6");
}

.bnrf8ghpe {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 4h16v12H4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.crv4i00bu {
  d: path("M4 3v18");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lulmb9b1a {
  d: path("M4 4h16v12H4");
}

.o40l0bbgl {
  d: path("M9 8.5h6");
}

.r3wo9dbni {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M9 11.5h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.vpuel0dtu {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 3v18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xexv76brg {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M9 8.5h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="vpuel0dtu"/><path class="bnrf8ghpe"/><path class="xexv76brg"/><path class="r3wo9dbni"/><path class="crv4i00bu"/><path class="lulmb9b1a"/><path class="o40l0bbgl"/><path class="a3fwgxb1c"/></g>`,
		"fallback": "iconmind:checkpoint-list-duotone-thin",
	});
}

export default Component;
