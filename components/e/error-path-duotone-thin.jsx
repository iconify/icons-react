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
		"content": `<style>.akm88w1ho {
  d: path("M2 8h7l4 4h9");
}

.c05571vet {
  d: path("m16 15 4 4");
}

.dg9leoptp {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m20 15 -4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.puhwuz9ig {
  d: path("m20 15 -4 4");
}

.uqhict2xe {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m16 15 4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.v_3erbqcl {
  d: path("m9 8 4 -4h9");
}

.vyqrt8bkj {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m9 8 4 -4h9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.y0cz25m5f {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M2 8h7l4 4h9");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="y0cz25m5f"/><path class="vyqrt8bkj"/><path class="uqhict2xe"/><path class="dg9leoptp"/><path class="akm88w1ho"/><path class="v_3erbqcl"/><path class="c05571vet"/><path class="puhwuz9ig"/></g>`,
		"fallback": "iconmind:error-path-duotone-thin",
	});
}

export default Component;
