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
		"content": `<style>.k_tdkpb-e {
  d: path("m12 3 9 9h-5v9H8v-9H3Z");
}

.n4tj2dyzn {
  fill: currentColor;
  d: path("m12 3 9 9h-5v9H8v-9H3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="n4tj2dyzn"/><path class="k_tdkpb-e"/></g>`,
		"fallback": "iconmind:arrow-big-up-duotone-bold",
	});
}

export default Component;
