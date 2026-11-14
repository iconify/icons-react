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

.lusuv4q0w {
  d: path("M6.75 7.25L9 9.5l-2.25 2.25");
}

.se99mzbvt {
  d: path("M12 3.5v11h6.5ZM5 17h14.5l-2 3H7ZM3.5 4q0 5.5 5.5 5.5");
}
</style><g class="hntgybcog"><path class="se99mzbvt"/><path class="lusuv4q0w"/></g>`,
		"fallback": "uix:apparent-wind",
	});
}

export default Component;
