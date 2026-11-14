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
		"content": `<style>.e5jfzabtj {
  d: path("M10 11a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pw9vjab7j {
  d: path("M12 9V4.5a2 2 0 0 1 4 0v4");
}

.wepgi1zbp {
  d: path("M6 13a6 6 0 0 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 6 19Z");
}
</style><g class="hntgybcog"><path class="wepgi1zbp"/><path class="e5jfzabtj"/><path class="pw9vjab7j"/></g>`,
		"fallback": "uix:ear-tag",
	});
}

export default Component;
