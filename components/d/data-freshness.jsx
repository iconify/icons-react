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
		"content": `<style>.edyhet09u {
  d: path("M11.905 21.25C7.548 21.232 4 19.989 4 18.5v-13C4 4 7.6 2.75 12 2.75S20 4 20 5.5v6.455");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p9zk_vb6x {
  d: path("M4 5.5C4 7 7.6 8.25 12 8.25S20 7 20 5.5M4 12c0 1.5 3.6 2.75 8 2.75q1.001-.001 1.933-.082m.817 6.582c0-4.25 2.25-6.5 6.5-6.5c0 4.25-2.25 6.5-6.5 6.5m0 0l3.75-3.75");
}
</style><g class="hntgybcog"><path class="edyhet09u"/><path class="p9zk_vb6x"/></g>`,
		"fallback": "uix:data-freshness",
	});
}

export default Component;
