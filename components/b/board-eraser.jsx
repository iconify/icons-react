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

.st3cu_bjo {
  width: 18.5px;
  height: 5px;
  x: 2.75px;
  y: 11.75px;
  rx: 1.5px;
}

.xchi6y-sh {
  width: 14.5px;
  height: 6.5px;
  x: 4.75px;
  y: 5.25px;
  rx: 2px;
}

.xhuhkybxg {
  d: path("M8.75 8.5h6.5m-10.5 12h4m3 0h7.5");
}
</style><g class="hntgybcog"><rect class="xchi6y-sh"/><rect class="st3cu_bjo"/><path class="xhuhkybxg"/></g>`,
		"fallback": "iconoven:board-eraser",
	});
}

export default Component;
