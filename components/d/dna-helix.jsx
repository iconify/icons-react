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

.ltzp_hbnj {
  d: path("M17 2.5C17 7 7 7 7 12s10 5 10 9.5M9.25 12h5.5M9 4h6M9 20h6");
}

.ptn0dtbna {
  d: path("M7 2.5C7 7 17 7 17 12S7 17 7 21.5");
}
</style><g class="hntgybcog"><path class="ptn0dtbna"/><path class="ltzp_hbnj"/></g>`,
		"fallback": "uix:dna-helix",
	});
}

export default Component;
