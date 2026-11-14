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

.yssyf8lqd {
  d: path("M6.875 4.5h10.25A4.375 4.375 0 0 1 21.5 8.875v6.25a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 15.125v-6.25A4.375 4.375 0 0 1 6.875 4.5");
}

.zfp6pacea {
  d: path("M12.5 11.25a3.75 3.75 0 1 1-3-3a2.25 2.25 0 0 0 3 3m-5 1h.01m2.24 2h.01M15.5 10h3.25m-3.25 4H18");
}
</style><g class="hntgybcog"><path class="yssyf8lqd"/><path class="zfp6pacea"/></g>`,
		"fallback": "uix:banner-cookie",
	});
}

export default Component;
