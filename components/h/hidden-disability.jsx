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

.y4rq56bwb {
  d: path("m6.5 2.5l5.5 8l5.5-8");
}

.yq_n3tbgc {
  d: path("M16 16a2 2 0 0 1-2 3.5a2 2 0 0 1-4 0A2 2 0 0 1 8 16a2 2 0 0 1 2-3.5a2 2 0 0 1 4 0a2 2 0 0 1 2 3.5");
}

.yv3gu2bmi {
  d: path("M10.5 16a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}
</style><g class="hntgybcog"><path class="y4rq56bwb"/><path class="yq_n3tbgc"/><path class="yv3gu2bmi"/></g>`,
		"fallback": "uix:hidden-disability",
	});
}

export default Component;
