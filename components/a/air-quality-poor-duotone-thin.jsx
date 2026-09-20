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
		"content": `<style>.eylqpv51p {
  d: path("M11 14a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ng35sb6yg {
  d: path("M3 16a9 9 0 0 1 18 0");
}

.ntt8cbcqj {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 8v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.pfpu_3ppl {
  d: path("M12 8v4");
}

.x7kl1kqgv {
  fill: currentColor;
  d: path("M11 14a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.yd1dd2b-v {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 16h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ys-dg812g {
  d: path("M3 16h18");
}

.zu-ymbcar {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 16a9 9 0 0 1 18 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="x7kl1kqgv"/><path class="zu-ymbcar"/><path class="yd1dd2b-v"/><path class="ntt8cbcqj"/><path class="ng35sb6yg"/><path class="ys-dg812g"/><path class="pfpu_3ppl"/><path class="eylqpv51p"/></g>`,
		"fallback": "iconmind:air-quality-poor-duotone-thin",
	});
}

export default Component;
