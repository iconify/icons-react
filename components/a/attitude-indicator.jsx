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

.kmg_8iz4r {
  d: path("M7 14h3l2 2l2-2h3");
}

.ln_whbcex {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0m.25-2h18.5");
}
</style><g class="hntgybcog"><path class="ln_whbcex"/><path class="kmg_8iz4r"/></g>`,
		"fallback": "uix:attitude-indicator",
	});
}

export default Component;
