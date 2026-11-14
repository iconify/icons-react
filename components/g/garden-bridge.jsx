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
		"content": `<style>.g4yfh2bht {
  d: path("M5 10.5q7-8.5 14 0m-14 0v4m3.5-7.25v4.25M12 6.25v4.25m3.5-3.25v4.25m3.5-1v4M7.5 17.75q2.25-1.25 4.5 0t4.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ncolvhvpv {
  d: path("M2.5 14.5H5q7-8 14 0h2.5");
}
</style><g class="hntgybcog"><path class="ncolvhvpv"/><path class="g4yfh2bht"/></g>`,
		"fallback": "uix:garden-bridge",
	});
}

export default Component;
