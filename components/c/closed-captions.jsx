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

.maw0ff_qb {
  d: path("M10.5 9.75h-1a2.25 2.25 0 0 0 0 4.5h1m6.5-4.5h-1a2.25 2.25 0 0 0 0 4.5h1");
}

.ucxu3gbut {
  width: 18.5px;
  height: 14.5px;
  x: 2.75px;
  y: 4.75px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="ucxu3gbut"/><path class="maw0ff_qb"/></g>`,
		"fallback": "iconoven:closed-captions",
	});
}

export default Component;
