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

.oitzp0bqk {
  d: path("M5.5 5.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m9 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M3 5.5h18");
}

.qa9lg1ksi {
  d: path("M7.5 7.5V15a4.5 4.5 0 0 0 9 0V7.5");
}
</style><g class="hntgybcog"><path class="qa9lg1ksi"/><path class="oitzp0bqk"/></g>`,
		"fallback": "uix:d-shackle",
	});
}

export default Component;
