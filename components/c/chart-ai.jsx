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
		"content": `<style>.cnisu4gnz {
  d: path("m6.75 16.25l3.5-4l3 2.5l3-3.5m1-8.25q.42 3.08 3.5 3.5q-3.08.42-3.5 3.5q-.42-3.08-3.5-3.5q3.08-.42 3.5-3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qmvt8fbnf {
  d: path("M3.25 3.25v17.5h17.5");
}
</style><g class="hntgybcog"><path class="qmvt8fbnf"/><path class="cnisu4gnz"/></g>`,
		"fallback": "iconoven:chart-ai",
	});
}

export default Component;
