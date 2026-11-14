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
		"content": `<style>.cep7nj_nx {
  d: path("M5.125 3h13.75A2.625 2.625 0 0 1 21.5 5.625v12.75A2.625 2.625 0 0 1 18.875 21H5.125A2.625 2.625 0 0 1 2.5 18.375V5.625A2.625 2.625 0 0 1 5.125 3M2.5 9h19m-19 6h19");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yk-ts_l8r {
  fill: currentColor;
  d: path("M6 4.75h3.5A1.25 1.25 0 0 1 10.75 6A1.25 1.25 0 0 1 9.5 7.25H6A1.25 1.25 0 0 1 4.75 6A1.25 1.25 0 0 1 6 4.75m5.75 6h4.5A1.25 1.25 0 0 1 17.5 12a1.25 1.25 0 0 1-1.25 1.25h-4.5A1.25 1.25 0 0 1 10.5 12a1.25 1.25 0 0 1 1.25-1.25m4.5 6h2A1.25 1.25 0 0 1 19.5 18a1.25 1.25 0 0 1-1.25 1.25h-2A1.25 1.25 0 0 1 15 18a1.25 1.25 0 0 1 1.25-1.25");
}
</style><g class="hntgybcog"><path class="cep7nj_nx"/><path class="yk-ts_l8r"/></g>`,
		"fallback": "uix:chart-swimlane",
	});
}

export default Component;
