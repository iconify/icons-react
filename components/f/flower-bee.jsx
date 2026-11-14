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
		"content": `<style>.dw11bacvd {
  d: path("M6 11.25a2.25 2.25 0 1 1 4 0A2.25 2.25 0 1 1 11.25 15A2.25 2.25 0 1 1 8 17.5A2.25 2.25 0 1 1 4.75 15A2.25 2.25 0 1 1 6 11.25m2 6.25v4m5.5-12.75a4 2.25 0 1 0 8 0a4 2.25 0 1 0-8 0");
}

.gd7s1abys {
  fill: currentColor;
  d: path("M8 14h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ln253lbzd {
  d: path("M16 6.75v4m3-4v4M17.5 6.5C15.5 6.5 13 5 14 3c1-1.25 3 .5 3.5 3.5m0 0C18 3.5 20 1.75 21 3c1 2-1.5 3.5-3.5 3.5");
}
</style><g class="hntgybcog"><path class="dw11bacvd"/><path class="gd7s1abys"/><path class="ln253lbzd"/></g>`,
		"fallback": "uix:flower-bee",
	});
}

export default Component;
