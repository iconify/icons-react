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

.k_916xngw {
  d: path("m14.5 10.5 3 3");
}

.mjmmdiava {
  d: path("M3 12a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4 4 4 0 0 1 -4 4H7a4 4 0 0 1 -4 -4");
}

.v22s1vbap {
  d: path("M6.5 12H11");
}

.x3gr8qf4w {
  d: path("m17.5 10.5 -3 3");
}
</style><g class="hntgybcog"><path class="mjmmdiava"/><path class="v22s1vbap"/><path class="k_916xngw"/><path class="x3gr8qf4w"/></g>`,
		"fallback": "iconmind:chip-remove-outline-thin",
	});
}

export default Component;
