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
		"content": `<style>.gs8m_709r {
  d: path("M3 12h6m6 0h6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.li5ikacea {
  fill: currentColor;
  d: path("M10.5 3.5h3A1.5 1.5 0 0 1 15 5v14a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 19V5a1.5 1.5 0 0 1 1.5-1.5");
}

.z0wll3bik {
  d: path("M7.375 3.5h9.25A4.375 4.375 0 0 1 21 7.875v8.25a4.375 4.375 0 0 1-4.375 4.375h-9.25A4.375 4.375 0 0 1 3 16.125v-8.25A4.375 4.375 0 0 1 7.375 3.5");
}
</style><g class="hntgybcog"><path class="z0wll3bik"/><path class="li5ikacea"/><path class="gs8m_709r"/></g>`,
		"fallback": "uix:database-column",
	});
}

export default Component;
