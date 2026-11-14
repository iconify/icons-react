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
		"content": `<style>.en-n-_2hi {
  d: path("M8 2.5h8A3.5 3.5 0 0 1 19.5 6v6a3.5 3.5 0 0 1-3.5 3.5H8A3.5 3.5 0 0 1 4.5 12V6A3.5 3.5 0 0 1 8 2.5m0 4h8M8 9.75h4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lsfh_nh0m {
  d: path("M9 15.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m1.5 2.5l-1 3.5m4-3.5l1 3.5");
}
</style><g class="hntgybcog"><path class="en-n-_2hi"/><path class="lsfh_nh0m"/></g>`,
		"fallback": "uix:bond-certificate",
	});
}

export default Component;
