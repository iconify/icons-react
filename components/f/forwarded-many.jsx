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
		"content": `<style>.cvrj58bhc {
  d: path("M9 18v-5.75A1.25 1.25 0 0 1 10.25 11h8.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n5aae1bpx {
  d: path("M14.75 2.25L17.5 5l-2.75 2.75M14.625 14h4.25a2.625 2.625 0 0 1 2.625 2.625v1.75A2.625 2.625 0 0 1 18.875 21h-4.25A2.625 2.625 0 0 1 12 18.375v-1.75A2.625 2.625 0 0 1 14.625 14");
}

.x-zcb8b1q {
  d: path("M3 12.5C3 7.5 6 5 11 5h6.5");
}
</style><g class="hntgybcog"><path class="x-zcb8b1q"/><path class="n5aae1bpx"/><path class="cvrj58bhc"/></g>`,
		"fallback": "uix:forwarded-many",
	});
}

export default Component;
