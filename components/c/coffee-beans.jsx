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
		"content": `<style>.edwsdkblc {
  d: path("M4.65 11.97a5 3.25-48 1 1 6.7-7.44a5 3.25-48 1 1-6.7 7.44m8 7.25a5 3.25-48 1 1 6.7-7.44a5 3.25-48 1 1-6.7 7.44");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zuft3bcwt {
  d: path("M5.83 10.67Q7.6 10.04 8 8.25t2.17-2.42m3.66 12.09q1.77-.63 2.17-2.42t2.17-2.42");
}
</style><g class="hntgybcog"><path class="edwsdkblc"/><path class="zuft3bcwt"/></g>`,
		"fallback": "iconoven:coffee-beans",
	});
}

export default Component;
