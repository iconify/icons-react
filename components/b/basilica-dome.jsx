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
		"content": `<style>.c2s4_gvnh {
  d: path("M2.5 21V11H6v3h12v-3h3.5v10Z");
}

.cc0-fv0tt {
  d: path("M6 14a6 6 0 0 1 12 0m-6-6V2.5m-2 2h4M10.25 21v-2.25a1.75 1.75 0 0 1 3.5 0V21");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="c2s4_gvnh"/><path class="cc0-fv0tt"/></g>`,
		"fallback": "uix:basilica-dome",
	});
}

export default Component;
