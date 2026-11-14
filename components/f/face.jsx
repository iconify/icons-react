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
		"content": `<style>.hn36zgbbp {
  d: path("M4.25 12a7.75 9.5 0 1 0 15.5 0a7.75 9.5 0 1 0-15.5 0m5-2h.01m5.49 0h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tkb05wq3e {
  d: path("m12 10.5l-.75 3h1m-2.5 3h4.5");
}
</style><g class="hntgybcog"><path class="hn36zgbbp"/><path class="tkb05wq3e"/></g>`,
		"fallback": "uix:face",
	});
}

export default Component;
