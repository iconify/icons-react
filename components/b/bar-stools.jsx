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
		"content": `<style>.c4diszbug {
  width: 11.5px;
  height: 3.5px;
  x: 6.25px;
  y: 3.75px;
  rx: 1.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lycgwgkxh {
  d: path("m8.25 7.25l-2 14m9.5-14l2 14M7 16h10");
}
</style><g class="hntgybcog"><rect class="c4diszbug"/><path class="lycgwgkxh"/></g>`,
		"fallback": "iconoven:bar-stools",
	});
}

export default Component;
