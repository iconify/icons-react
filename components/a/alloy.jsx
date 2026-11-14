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
		"content": `<style>.bv6579b2o {
  d: path("M2.5 19L5 12h8l2.5 7Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xx2q2z9nb {
  d: path("m9.5 12l2.25-6.5H19l2.5 8.5h-7.75M6.5 15.5c.75-1.25 1.75-1.25 2.5 0s1.75 1.25 2.5 0");
}
</style><g class="ulnmmdpxh"><path class="bv6579b2o"/><path class="xx2q2z9nb"/></g>`,
		"fallback": "uix-sharp:alloy",
	});
}

export default Component;
