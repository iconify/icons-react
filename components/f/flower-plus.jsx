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

.iw0wf652b {
  d: path("M12 3.5a2.5 2.5 0 0 1 4 2.25a2.5 2.5 0 0 1 0 4.5a2.5 2.5 0 0 1-4 2.25a2.5 2.5 0 0 1-4-2.25a2.5 2.5 0 0 1 0-4.5a2.5 2.5 0 0 1 4-2.25");
}

.mq8qfb6da {
  d: path("M10.25 8a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M12 12.5v9m0-2c-2.5 0-5-1.5-5.5-4c2.5 0 5 1.5 5.5 4m6-4.5v6m-3-3h6");
}
</style><g class="hntgybcog"><path class="iw0wf652b"/><path class="mq8qfb6da"/></g>`,
		"fallback": "uix:flower-plus",
	});
}

export default Component;
