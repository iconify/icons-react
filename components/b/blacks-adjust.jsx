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

.to_k62bjp {
  d: path("M2.5 12a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0");
}

.u0mwr5bbr {
  fill: currentColor;
  d: path("M13.75 10.5H20a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5h-6.25a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5");
}

.uo_t3hg_y {
  d: path("M6 12h.01");
}
</style><g class="hntgybcog"><path class="to_k62bjp"/><path class="u0mwr5bbr"/><path class="uo_t3hg_y"/></g>`,
		"fallback": "uix:blacks-adjust",
	});
}

export default Component;
