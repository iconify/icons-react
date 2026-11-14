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
		"content": `<style>.gmk6y83je {
  d: path("m3 4.5l3 .25l-.25 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o6q-gxnjn {
  d: path("M10.625 8h2.75A2.625 2.625 0 0 1 16 10.625v2.75A2.625 2.625 0 0 1 13.375 16h-2.75A2.625 2.625 0 0 1 8 13.375v-2.75A2.625 2.625 0 0 1 10.625 8");
}

.zm8zyabwd {
  d: path("M15.249 3.073a9.5 9.5 0 1 1-9.355 1.65");
}
</style><g class="hntgybcog"><path class="o6q-gxnjn"/><path class="zm8zyabwd"/><path class="gmk6y83je"/></g>`,
		"fallback": "uix:canvas-rotate-view",
	});
}

export default Component;
