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

.ja8_zg6om {
  d: path("M6.5 12a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0");
}

.ocfr_xb0j {
  d: path("m9 6.5l.75-4h4.5l.75 4m-6 11l.75 4h4.5l.75-4m-3-8V12l2 1.5");
}
</style><g class="hntgybcog"><path class="ja8_zg6om"/><path class="ocfr_xb0j"/></g>`,
		"fallback": "uix:category-watches",
	});
}

export default Component;
