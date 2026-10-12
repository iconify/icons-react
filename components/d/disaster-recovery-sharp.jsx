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
		"content": `<style>.bx2i3yfwl {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M21.25 17.75a3.5 3.5 0 1 1-1.03-2.47m-1.5 0h1.5v-1.5");
}

.c8_arzq0q {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 13.63h.01");
}

.pd05ti2rj {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 2.75h13.5V8.5H2.75z");
}

.px--lizoo {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 10.75h13.5v5.75H2.75z");
}

.qlx4gxb8g {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 5.63h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="pd05ti2rj"/><path class="qlx4gxb8g"/><path class="px--lizoo"/><path class="c8_arzq0q"/><path class="bx2i3yfwl"/></g>`,
		"fallback": "iconoven:disaster-recovery-sharp",
	});
}

export default Component;
