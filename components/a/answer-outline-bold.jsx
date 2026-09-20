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
		"content": `<style>.cu90avb1w {
  d: path("M4 4h14a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-6l-4 4v-4H4a2 2 0 0 1 -2 -2V6a2 2 0 0 1 2 -2");
}

.k39hcib1t {
  d: path("m7 10 3 3 5 -5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="cu90avb1w"/><path class="k39hcib1t"/></g>`,
		"fallback": "iconmind:answer-outline-bold",
	});
}

export default Component;
