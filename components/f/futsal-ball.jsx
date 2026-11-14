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

.usk5ihb4r {
  d: path("m12.882 7.642l1.02.741a1.5 1.5 0 0 1 .56 1.625l-.401 1.404a1.5 1.5 0 0 1-1.442 1.088h-1.238a1.5 1.5 0 0 1-1.442-1.088l-.401-1.404a1.5 1.5 0 0 1 .56-1.625l1.02-.741a1.5 1.5 0 0 1 1.764 0M12 7V2m2.75 7l4.75-1.5m-5.75 5l3 4m-6.5-4l-3 4m2-7.5L4.5 7.5m2.5 14q5-2 10 0");
}

.wwnzpxuhs {
  d: path("M4 10a8 8 0 1 0 16 0a8 8 0 1 0-16 0");
}
</style><g class="hntgybcog"><path class="wwnzpxuhs"/><path class="usk5ihb4r"/></g>`,
		"fallback": "uix:futsal-ball",
	});
}

export default Component;
