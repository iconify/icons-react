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

.tkahp9b1r {
  d: path("M3 12a7 7 0 1 0 14 0 7 7 0 1 0 -14 0");
}

.vokybza2s {
  d: path("M7 12a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.xbdh32u_w {
  d: path("M17 12h4v7");
}
</style><g class="hntgybcog"><path class="tkahp9b1r"/><path class="vokybza2s"/><path class="xbdh32u_w"/></g>`,
		"fallback": "iconmind:bandage-outline-thin",
	});
}

export default Component;
