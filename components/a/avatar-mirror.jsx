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

.hq1n49d7e {
  d: path("M9.75 9a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m-1 7.5c0-2 1.5-2.75 3.25-2.75s3.25.75 3.25 2.75");
}

.k6wf5qb9m {
  d: path("M6 19V8a6 6 0 0 1 12 0v11Zm2 0l-1.5 2.5M16 19l1.5 2.5");
}
</style><g class="hntgybcog"><path class="k6wf5qb9m"/><path class="hq1n49d7e"/></g>`,
		"fallback": "uix:avatar-mirror",
	});
}

export default Component;
