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
		"content": `<style>.h8vsfjbnr {
  d: path("M10.75 18.25h2.5M10.59 7.09a2 2 0 0 1 2.82 0M8.46 4.96a5 5 0 0 1 7.08 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lt7w--kiw {
  width: 8px;
  height: 11px;
  x: 8px;
  y: 10.25px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="lt7w--kiw"/><path class="h8vsfjbnr"/></g>`,
		"fallback": "iconoven:hotspot",
	});
}

export default Component;
