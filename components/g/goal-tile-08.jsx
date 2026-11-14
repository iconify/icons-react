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

.i53jb3bnv {
  d: path("M2.5 19.5V5h19v14.5");
}

.r28p-jmoo {
  d: path("m2.5 5l4 3.5v11m0-11h11v11m0-11l4-3.5M12 8.5v11");
}
</style><g class="hntgybcog"><path class="i53jb3bnv"/><path class="r28p-jmoo"/></g>`,
		"fallback": "uix:goal-tile-08",
	});
}

export default Component;
