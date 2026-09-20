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
		"content": `<style>.b603-acaz {
  d: path("M10 12h8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lldlp5blb {
  d: path("M5 14.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.oh4p-ccfe {
  d: path("M2 10a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.x6pm5hl4u {
  d: path("M6 10v2.5");
}
</style><g class="hntgybcog"><path class="oh4p-ccfe"/><path class="x6pm5hl4u"/><path class="lldlp5blb"/><path class="b603-acaz"/></g>`,
		"fallback": "iconmind:inline-alert-outline-thin",
	});
}

export default Component;
