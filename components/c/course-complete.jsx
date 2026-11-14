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
		"content": `<style>.c3wstfbna {
  d: path("M3 10v3a9 5.5 0 0 0 18 0v-3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l88d_k9mo {
  d: path("m8.5 10l2.5 2.25l4.5-4.5");
}

.qoc1g9xqz {
  d: path("M3 10a9 5.5 0 1 0 18 0a9 5.5 0 1 0-18 0");
}
</style><g class="hntgybcog"><path class="qoc1g9xqz"/><path class="c3wstfbna"/><path class="l88d_k9mo"/></g>`,
		"fallback": "uix:course-complete",
	});
}

export default Component;
