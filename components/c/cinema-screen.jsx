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
		"content": `<style>.bkw0vcbrm {
  d: path("M2.75 3.75h2.5c0 5.5.5 11 1.75 16.5H2.75Zm18.5 0h-2.5c0 5.5-.5 11-1.75 16.5h4.25Zm-16 0h13.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rfbj_-bad {
  width: 6.5px;
  height: 4.5px;
  x: 8.75px;
  y: 7.75px;
  rx: 1.25px;
}
</style><g class="hntgybcog"><path class="bkw0vcbrm"/><rect class="rfbj_-bad"/></g>`,
		"fallback": "iconoven:cinema-screen",
	});
}

export default Component;
