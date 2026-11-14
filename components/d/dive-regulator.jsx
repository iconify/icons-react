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
		"content": `<style>.aio_58brh {
  d: path("M3 9.5a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zegcv3bus {
  d: path("M14.5 13.75c3 1.75 4.75.75 4.75 3.5m-.5 0h1a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2a2 2 0 0 1 2-2M7 9.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}
</style><g class="hntgybcog"><path class="aio_58brh"/><path class="zegcv3bus"/></g>`,
		"fallback": "uix:dive-regulator",
	});
}

export default Component;
