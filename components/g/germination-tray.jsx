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

.j-uxycb6e {
  d: path("M4.25 14h15.5a1.75 1.75 0 0 1 1.75 1.75v2.5A1.75 1.75 0 0 1 19.75 20H4.25a1.75 1.75 0 0 1-1.75-1.75v-2.5A1.75 1.75 0 0 1 4.25 14m-.75-2.75V9.5a4 4 0 0 1 4-4h9a4 4 0 0 1 4 4v1.75M8.75 14v6m6.5-6v6");
}

.rmgmqld5s {
  d: path("M12 14v-3.5m0 1c0-2 1.5-3 3.5-3c0 2-1.5 3-3.5 3");
}
</style><g class="hntgybcog"><path class="j-uxycb6e"/><path class="rmgmqld5s"/></g>`,
		"fallback": "uix:germination-tray",
	});
}

export default Component;
