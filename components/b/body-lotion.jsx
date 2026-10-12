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
		"content": `<style>.dcoewqb0r {
  d: path("M7.5 8V2.75m-2.5 0h5.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wjugozbax {
  width: 9.5px;
  height: 13.25px;
  x: 2.75px;
  y: 8px;
  rx: 3.25px;
}

.yyol2gwzp {
  d: path("M5.5 15.5h4m4.25 5.75h6.5a2.4 2.4 0 0 0-1.85-2.9A2.4 2.4 0 0 0 15.5 16c-1.15.85-1.75 2.75-1.75 5.25");
}
</style><g class="hntgybcog"><path class="dcoewqb0r"/><rect class="wjugozbax"/><path class="yyol2gwzp"/></g>`,
		"fallback": "iconoven:body-lotion",
	});
}

export default Component;
