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
		"content": `<style>.azmkdzb2j {
  d: path("M6 21.5v-19h5.5v19");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wa_i1cbju {
  d: path("M5 7h7.5A1.5 1.5 0 0 1 14 8.5a1.5 1.5 0 0 1-1.5 1.5H5a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 5 7m13 7.5V21m-2.75-2.75L18 21l2.75-2.75");
}
</style><g class="hntgybcog"><path class="azmkdzb2j"/><path class="wa_i1cbju"/></g>`,
		"fallback": "uix:drop-tower",
	});
}

export default Component;
