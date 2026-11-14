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

.r9_f020fb {
  d: path("m11.65 5.812l1.209 3.322l-3.322 1.209M6.5 13.5h11");
}

.vu_6ezbqv {
  d: path("M6.875 3.5h10.25A4.375 4.375 0 0 1 21.5 7.875v4.25a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 12.125v-4.25A4.375 4.375 0 0 1 6.875 3.5M12 16.5v4m-4 0h8M7.422 6.598l8.156 3.804");
}
</style><g class="hntgybcog"><path class="vu_6ezbqv"/><path class="r9_f020fb"/></g>`,
		"fallback": "uix:arrival-screen",
	});
}

export default Component;
