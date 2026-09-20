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
		"content": `<style>.ds-ppobhh {
  d: path("m2 14 3 3 3 -3 3 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.igcogj_-n {
  d: path("m2 8 3 3 3 -3 3 3");
}

.nvt-cb-fy {
  d: path("M15 9a2 2 0 0 1 2 -2h3a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-3a2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="igcogj_-n"/><path class="ds-ppobhh"/><path class="nvt-cb-fy"/></g>`,
		"fallback": "iconmind:fuzz-outline-thin",
	});
}

export default Component;
