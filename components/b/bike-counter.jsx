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

.knz1v6b1l {
  d: path("M7.5 10H11l3-4l2.5 4");
}

.u8qelvb_r {
  d: path("M5.5 10a2 2 0 1 0 4 0a2 2 0 1 0-4 0m9 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.ydh494a_f {
  d: path("M6.875 2.5h10.25A4.375 4.375 0 0 1 21.5 6.875v3.75A4.375 4.375 0 0 1 17.125 15H6.875A4.375 4.375 0 0 1 2.5 10.625v-3.75A4.375 4.375 0 0 1 6.875 2.5M12 15v6.5m-3 0h6");
}
</style><g class="hntgybcog"><path class="ydh494a_f"/><path class="u8qelvb_r"/><path class="knz1v6b1l"/></g>`,
		"fallback": "uix:bike-counter",
	});
}

export default Component;
