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

.ij5jnc-3e {
  d: path("M9 9c-.5 3-2.5 5-2.5 8.5C6.5 20 8 21 10 21h4c2 0 3.5-1 3.5-3.5c0-3.5-2-5.5-2.5-8.5Zm-.5 0c0-3 1.5-4.5 3.5-4.5S15.5 6 15.5 9M12 2.5v2");
}

.zpeo5rbig {
  d: path("M7 15c-2.5-1-3.5-5-4.5-7.5m12.75 3c4.25-.5 4.75 4 2 5.5");
}
</style><g class="hntgybcog"><path class="ij5jnc-3e"/><path class="zpeo5rbig"/></g>`,
		"fallback": "uix:coffee-pot-dallah",
	});
}

export default Component;
