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

.xqk8jgbac {
  d: path("M11 7.5a5 5 0 1 0 10 0a5 5 0 1 0-10 0M3 7l4.5 11.75q2-4.25 3.25-5M2.5 21.5h10");
}

.ywk3cdbkf {
  d: path("M20.5 5.25A8 8 0 0 0 13.75 12m4.5-9a10 10 0 0 0-6.75 6.75");
}
</style><g class="hntgybcog"><path class="xqk8jgbac"/><path class="ywk3cdbkf"/></g>`,
		"fallback": "uix:cricket-bouncer",
	});
}

export default Component;
