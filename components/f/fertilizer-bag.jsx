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
		"content": `<style>.gyh3r2biy {
  d: path("M4.5 6.5h15m-11 11c0-4.5 2.5-7.5 7-8c.25 4.75-2.25 7.75-7 8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jwu2s8bzx {
  width: 15px;
  height: 18.5px;
  x: 4.5px;
  y: 2.75px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="jwu2s8bzx"/><path class="gyh3r2biy"/></g>`,
		"fallback": "iconoven:fertilizer-bag",
	});
}

export default Component;
