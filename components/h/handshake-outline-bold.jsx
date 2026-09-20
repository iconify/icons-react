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
		"content": `<style>.f8gsx7b5s {
  d: path("M6 8h12");
}

.fcstqn4mf {
  d: path("M18 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.q9rcsymqn {
  d: path("m6 16 3 3");
}

.qs69rnufu {
  d: path("m18 8 -3 -3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.xqfhg19ie {
  d: path("M18 16H6");
}

.zuquf0b8s {
  d: path("M2 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="s0phu2bbs"><path class="zuquf0b8s"/><path class="fcstqn4mf"/><path class="f8gsx7b5s"/><path class="qs69rnufu"/><path class="xqfhg19ie"/><path class="q9rcsymqn"/></g>`,
		"fallback": "iconmind:handshake-outline-bold",
	});
}

export default Component;
