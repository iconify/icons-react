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
		"content": `<style>.em-d_9tjj {
  d: path("m3.5 12.5l3.5-3h13V18l-3.5 3h-13Z");
}

.ffwa-976k {
  d: path("M17.5 2.5L18 5l-2.75.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v6i_m_bgg {
  d: path("M3.5 12.5h13l3.5-3m-3.5 3V21M4 7.75C5 3 12.5 1.5 18 5");
}
</style><g class="hntgybcog"><path class="em-d_9tjj"/><path class="v6i_m_bgg"/><path class="ffwa-976k"/></g>`,
		"fallback": "uix:box-jump",
	});
}

export default Component;
