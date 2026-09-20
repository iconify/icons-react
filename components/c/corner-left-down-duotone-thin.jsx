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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hq7q5pbzv {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M20 4H10v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.khupvdbel {
  d: path("M20 4H10v16");
}

.m690iuuio {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m5 15 5 5 5 -5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.x7qdjyb5k {
  d: path("m5 15 5 5 5 -5");
}
</style><g class="hntgybcog"><path class="hq7q5pbzv"/><path class="m690iuuio"/><path class="khupvdbel"/><path class="x7qdjyb5k"/></g>`,
		"fallback": "iconmind:corner-left-down-duotone-thin",
	});
}

export default Component;
