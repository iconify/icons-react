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
		"content": `<style>.eifrm_8kj {
  d: path("M3.25 16.25a8.75 8.75 0 0 1 2.67-6.29M8.58 8.2a8.75 8.75 0 0 1 6.84 0m2.66 1.76a8.75 8.75 0 0 1 2.67 6.29m-7.51-1.24l2.3-2.3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.km8emob2x {
  cx: 12px;
  cy: 16.25px;
  r: 1.75px;
}
</style><g class="hntgybcog"><path class="eifrm_8kj"/><circle class="km8emob2x"/></g>`,
		"fallback": "iconoven:credit-report",
	});
}

export default Component;
