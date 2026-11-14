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
		"content": `<style>.djjfg3v7u {
  fill: currentColor;
  d: path("M18 18v-3.5a3.5 3.5 0 0 1 3.5 3.5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n17l3qndx {
  d: path("M12.472 21H4.5c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5q.865 0 1.666.121M7 7.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0M14.5 18a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0");
}
</style><g class="hntgybcog"><path class="n17l3qndx"/><path class="djjfg3v7u"/></g>`,
		"fallback": "uix:data-analyst",
	});
}

export default Component;
