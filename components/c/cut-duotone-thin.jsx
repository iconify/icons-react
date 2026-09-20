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
		"content": `<style>.dg6dh3b3f {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m6 4 11 11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.du3agkbjb {
  d: path("M5 18a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.fquh7rbnp {
  d: path("M15 18a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.h03wmtogt {
  fill: currentColor;
  d: path("M5 18a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.s4cw9tboz {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M18 4 7 15");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.wrcxysbfa {
  d: path("m6 4 11 11");
}

.yo-dkgbus {
  fill: currentColor;
  d: path("M15 18a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.zae78obsi {
  d: path("M18 4 7 15");
}
</style><g class="hntgybcog"><path class="h03wmtogt"/><path class="yo-dkgbus"/><path class="dg6dh3b3f"/><path class="s4cw9tboz"/><path class="wrcxysbfa"/><path class="zae78obsi"/><path class="du3agkbjb"/><path class="fquh7rbnp"/></g>`,
		"fallback": "iconmind:cut-duotone-thin",
	});
}

export default Component;
