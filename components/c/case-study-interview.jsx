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

.lqb8iug7x {
  d: path("M6.75 10.5a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0");
}

.polw-1gzh {
  d: path("M3.5 10.5a7 7 0 1 0 14 0a7 7 0 1 0-14 0m12 5l5 5");
}

.rm0_zhq4b {
  d: path("M10.5 6.75v3.75h3.75");
}
</style><g class="hntgybcog"><path class="polw-1gzh"/><path class="lqb8iug7x"/><path class="rm0_zhq4b"/></g>`,
		"fallback": "uix:case-study-interview",
	});
}

export default Component;
