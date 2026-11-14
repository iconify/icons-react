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

.i3fvaporj {
  d: path("M6.5 3h11A3.5 3.5 0 0 1 21 6.5v11a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 17.5v-11A3.5 3.5 0 0 1 6.5 3M3 9h18M3 15h18M9 3v18m6-18v18");
}

.r5osztbms {
  fill: currentColor;
  d: path("M3 9V5a2 2 0 0 1 2-2h4v6Z");
}

.x9ahn40kq {
  d: path("M12 12h.01");
}
</style><g class="hntgybcog"><path class="i3fvaporj"/><path class="r5osztbms"/><path class="x9ahn40kq"/></g>`,
		"fallback": "uix:coverage-heatmap",
	});
}

export default Component;
