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
		"content": `<style>.e5rxwxb6q {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 3v18h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qe97cg-lx {
  d: path("M3 3v18h18");
}

.qj99nibfx {
  d: path("M6 18h8l4 -4V6");
}

.vl3ktrutp {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 18h8l4 -4V6");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="e5rxwxb6q"/><path class="vl3ktrutp"/><path class="qe97cg-lx"/><path class="qj99nibfx"/></g>`,
		"fallback": "iconmind:grokking-duotone-thin",
	});
}

export default Component;
