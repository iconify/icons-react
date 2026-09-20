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
		"content": `<style>.abb9xwfof {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m9 7 -5 5 5 5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j2r1pso3k {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 12h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s6jbysbtk {
  d: path("m9 7 -5 5 5 5");
}

.sxlwlmkmh {
  d: path("M4 12h16");
}
</style><g class="hntgybcog"><path class="j2r1pso3k"/><path class="abb9xwfof"/><path class="sxlwlmkmh"/><path class="s6jbysbtk"/></g>`,
		"fallback": "iconmind:arrow-left-duotone-thin",
	});
}

export default Component;
