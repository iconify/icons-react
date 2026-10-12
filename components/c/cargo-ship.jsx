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
		"content": `<style>.dpjyhb6ma {
  width: 5.5px;
  height: 4.5px;
  x: 4.75px;
  y: 5.75px;
  rx: 1px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z5vvn8-dl {
  d: path("M2.75 13.25h18.5l-2 5.25a1.75 1.75 0 0 1-1.65 1.25H6.4a1.75 1.75 0 0 1-1.65-1.25Z");
}

.zu9z2l-sl {
  width: 6px;
  height: 3.5px;
  x: 13.25px;
  y: 6.75px;
  rx: 1px;
}
</style><g class="hntgybcog"><path class="z5vvn8-dl"/><rect class="dpjyhb6ma"/><rect class="zu9z2l-sl"/></g>`,
		"fallback": "iconoven:cargo-ship",
	});
}

export default Component;
