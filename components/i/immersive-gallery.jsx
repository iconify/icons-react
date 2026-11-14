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
		"content": `<style>.fyccvvbll {
  d: path("M2.5 12a9.5 7.5 0 1 0 19 0a9.5 7.5 0 1 0-19 0");
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

.uta6wk6wt {
  d: path("m8 15l3.5-3.5L15 15");
}
</style><g class="hntgybcog"><path class="fyccvvbll"/><path class="o6q-gxnjn"/><path class="uta6wk6wt"/></g>`,
		"fallback": "uix:immersive-gallery",
	});
}

export default Component;
