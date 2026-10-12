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

.s1xj6jveq {
  d: path("M8.5 2.75v6.5m0 5.5v6.5m7-18.5v6.5m0 5.5v6.5M8.5 5.5h7m-7 13h7");
}

.w-_h-kbom {
  width: 15.5px;
  height: 5.5px;
  x: 4.25px;
  y: 9.25px;
  rx: 2px;
}
</style><g class="hntgybcog"><path class="s1xj6jveq"/><rect class="w-_h-kbom"/></g>`,
		"fallback": "iconoven:capo",
	});
}

export default Component;
