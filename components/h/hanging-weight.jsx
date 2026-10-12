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

.k_hcjvwmw {
  cx: 12px;
  cy: 15.75px;
  r: 5.5px;
}

.z8-tfk6st {
  d: path("M12 14a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 1 0 0-3.5M4.25 2.75c0 3 3.5 4.75 7.75 4.75s7.75-1.75 7.75-4.75M12 7.5V14");
}
</style><g class="hntgybcog"><circle class="k_hcjvwmw"/><path class="z8-tfk6st"/></g>`,
		"fallback": "iconoven:hanging-weight",
	});
}

export default Component;
