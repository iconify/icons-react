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
		"content": `<style>.avz09zu-i {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M8 12h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.bzecsub_a {
  d: path("M8 12h12");
}

.c_pe6njtz {
  d: path("M4 7v10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o-us9ngaz {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 7v10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.q6gd3twiv {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m16 8 4 4 -4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.u8aszkb6i {
  d: path("m16 8 4 4 -4 4");
}
</style><g class="hntgybcog"><path class="o-us9ngaz"/><path class="avz09zu-i"/><path class="q6gd3twiv"/><path class="c_pe6njtz"/><path class="bzecsub_a"/><path class="u8aszkb6i"/></g>`,
		"fallback": "iconmind:arrow-right-from-line-duotone-thin",
	});
}

export default Component;
