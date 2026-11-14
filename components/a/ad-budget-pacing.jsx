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
		"content": `<style>.duporv-yi {
  d: path("M18.75 17c-.25-.5-.5-.5-.75-.5q-.75 0-.75.75c0 .5 1.5.5 1.5 1.5q0 .75-.75.75c-.5 0-.75-.25-.75-.5m.75-3.25v.75m0 3v.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yskkwt1nx {
  d: path("M3 2.5h9.5M3 21.5h9.2m-7.95-19V5c0 3 3.5 5 3.5 7s-3.5 4-3.5 7v2.5m7-19V5c0 3-3.5 5-3.5 7s3.5 4 3.5 7v2.5M14 18a4 4 0 1 0 8 0a4 4 0 1 0-8 0");
}
</style><g class="hntgybcog"><path class="yskkwt1nx"/><path class="duporv-yi"/></g>`,
		"fallback": "uix:ad-budget-pacing",
	});
}

export default Component;
