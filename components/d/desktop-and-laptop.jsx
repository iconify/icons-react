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

.qddbsx3op {
  d: path("M4.75 3.75h11.5q2 0 2 2v2.5q0 2-2 2h-5.5q-2 0-2 2v1q0 2-2 2h-2q-2 0-2-2v-7.5q0-2 2-2m.75 11.5v6m-2 0h3.75");
}

.trdnq1gnk {
  width: 7.5px;
  height: 5.5px;
  x: 11.75px;
  y: 13px;
  rx: 1.25px;
}

.u7tj40bae {
  d: path("M10.25 21.25h10.5");
}
</style><g class="hntgybcog"><path class="qddbsx3op"/><rect class="trdnq1gnk"/><path class="u7tj40bae"/></g>`,
		"fallback": "iconoven:desktop-and-laptop",
	});
}

export default Component;
