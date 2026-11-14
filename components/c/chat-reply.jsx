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

.n4pna8wui {
  d: path("M8 9h5.5a2.5 2.5 0 0 1 2.5 2.5V13");
}

.wxoo7k3or {
  d: path("M4 6a2.5 2.5 0 0 1 2.5-2.5h11A2.5 2.5 0 0 1 20 6v8a2.5 2.5 0 0 1-2.5 2.5H11L7 20v-3.5h-.5A2.5 2.5 0 0 1 4 14Z");
}

.xrph4pb_x {
  d: path("M10.5 6.5L8 9l2.5 2.5");
}
</style><g class="hntgybcog"><path class="wxoo7k3or"/><path class="xrph4pb_x"/><path class="n4pna8wui"/></g>`,
		"fallback": "uix:chat-reply",
	});
}

export default Component;
