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
		"content": `<style>.ha2csfbah {
  d: path("M8.5 14.5A3.5 3.5 0 0 0 12 18");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mp1ejg5hv {
  d: path("M12 2.75S5 10 5 14.5a7 7 0 0 0 14 0c0-4.5-7-11.75-7-11.75");
}
</style><g class="hntgybcog"><path class="mp1ejg5hv"/><path class="ha2csfbah"/></g>`,
		"fallback": "uix:hydration",
	});
}

export default Component;
