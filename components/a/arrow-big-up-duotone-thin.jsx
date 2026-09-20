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

.k_tdkpb-e {
  d: path("m12 3 9 9h-5v9H8v-9H3Z");
}

.n4tj2dyzn {
  fill: currentColor;
  d: path("m12 3 9 9h-5v9H8v-9H3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="n4tj2dyzn"/><path class="k_tdkpb-e"/></g>`,
		"fallback": "iconmind:arrow-big-up-duotone-thin",
	});
}

export default Component;
