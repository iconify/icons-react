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
		"content": `<style>.yrgh93bca {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 7.25v14m5-14v14m5.5-14v14m5-14v14m-17-10.75h18.5M2.75 18h18.5M3 7.25L4.25 3.5L5.5 7.25m2.5 0L9.25 3.5l1.25 3.75m3 0l1.25-3.75L16 7.25m2.5 0l1.25-3.75L21 7.25");
}
</style><path class="yrgh93bca"/>`,
		"fallback": "iconoven:fence-iron",
	});
}

export default Component;
