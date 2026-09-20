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

.i67dqei2u {
  d: path("M4 10v10h10");
}

.ncm8vib4e {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M20 4 4 20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.oo0zq0w3g {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 10v10h10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.piaam4vpr {
  d: path("M20 4 4 20");
}
</style><g class="hntgybcog"><path class="ncm8vib4e"/><path class="oo0zq0w3g"/><path class="piaam4vpr"/><path class="i67dqei2u"/></g>`,
		"fallback": "iconmind:arrow-down-left-duotone-thin",
	});
}

export default Component;
