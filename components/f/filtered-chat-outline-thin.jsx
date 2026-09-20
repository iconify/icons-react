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
		"content": `<style>.ezj_gmbcp {
  d: path("M2 4a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k0kvi05dj {
  d: path("M7.5 6h9l-3 3v5h-3V9Z");
}

.mgny0cq-k {
  d: path("M6 18v3l3 -3");
}
</style><g class="hntgybcog"><path class="ezj_gmbcp"/><path class="mgny0cq-k"/><path class="k0kvi05dj"/></g>`,
		"fallback": "iconmind:filtered-chat-outline-thin",
	});
}

export default Component;
