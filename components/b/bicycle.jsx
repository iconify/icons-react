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
		"content": `<style>.drobnoznw {
  cx: 5.5px;
  cy: 17px;
  r: 2.75px;
}

.em4k7_b5o {
  cx: 18.5px;
  cy: 17px;
  r: 2.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.u4z8cvisi {
  d: path("M8.25 17H11L9.6 9.25m-1.35 0H11m-.95 2.5h6.59M11 17l5.2-6.5m-.7-2l2.08 5.91M15.5 8.5h2A1.5 1.5 0 0 1 19 10v.75");
}
</style><g class="hntgybcog"><path class="u4z8cvisi"/><circle class="drobnoznw"/><circle class="em4k7_b5o"/></g>`,
		"fallback": "iconoven:bicycle",
	});
}

export default Component;
