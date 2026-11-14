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
		"content": `<style>.a08esd5rq {
  d: path("M8.5 9.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m3.5 0l2-1.75M8 17.5v4m4-4v4m4-4v4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x7p5z56sq {
  d: path("M7.5 2.5h9A3.5 3.5 0 0 1 20 6v8a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 4 14V6a3.5 3.5 0 0 1 3.5-3.5");
}
</style><g class="hntgybcog"><path class="x7p5z56sq"/><path class="a08esd5rq"/></g>`,
		"fallback": "uix:heat-interface-unit",
	});
}

export default Component;
