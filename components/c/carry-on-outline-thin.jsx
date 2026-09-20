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
		"content": `<style>.ai7mlsqqn {
  d: path("M15 21a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n0k4ov7kr {
  d: path("M7 21a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.oz4rn3bss {
  d: path("M5 8a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2H7a2 2 0 0 1 -2 -2Z");
}

.u-a-7fbnu {
  d: path("M10 6V3h4v3");
}
</style><g class="hntgybcog"><path class="oz4rn3bss"/><path class="u-a-7fbnu"/><path class="n0k4ov7kr"/><path class="ai7mlsqqn"/></g>`,
		"fallback": "iconmind:carry-on-outline-thin",
	});
}

export default Component;
