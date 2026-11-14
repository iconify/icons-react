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
		"content": `<style>.fek2mtlhk {
  d: path("M13 6.5h2.5V9");
}

.ggigns4kc {
  d: path("M7.5 7.5L11 11l4.5-4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wxoo7k3or {
  d: path("M4 6a2.5 2.5 0 0 1 2.5-2.5h11A2.5 2.5 0 0 1 20 6v8a2.5 2.5 0 0 1-2.5 2.5H11L7 20v-3.5h-.5A2.5 2.5 0 0 1 4 14Z");
}
</style><g class="hntgybcog"><path class="wxoo7k3or"/><path class="ggigns4kc"/><path class="fek2mtlhk"/></g>`,
		"fallback": "uix:call-missed-chat",
	});
}

export default Component;
