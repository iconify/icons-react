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
		"content": `<style>.g17pzzb6x {
  d: path("M8.5 14.25h7a1.5 1.5 0 0 1 1.5 1.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-7a1.5 1.5 0 0 1-1.5-1.5v-1.5a1.5 1.5 0 0 1 1.5-1.5m1 2.25h2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.id-dvebwu {
  d: path("M2.5 5h19C21 7.5 18 8.5 12 8.5S3 7.5 2.5 5M12 8.5v3m-5 0h10a3.5 3.5 0 0 1 3.5 3.5v3a3.5 3.5 0 0 1-3.5 3.5H7A3.5 3.5 0 0 1 3.5 18v-3A3.5 3.5 0 0 1 7 11.5");
}
</style><g class="hntgybcog"><path class="id-dvebwu"/><path class="g17pzzb6x"/></g>`,
		"fallback": "uix:deli-scale",
	});
}

export default Component;
