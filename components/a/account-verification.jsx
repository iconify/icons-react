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

.o7ukv29ko {
  d: path("m15.75 17.75l1.5 1.5l2.5-2.75");
}

.utnoosb5m {
  d: path("M11.472 20.5H4c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5q.758 0 1.468.093M6.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0m7.25 10.75a4 4 0 1 0 8 0a4 4 0 1 0-8 0");
}
</style><g class="hntgybcog"><path class="utnoosb5m"/><path class="o7ukv29ko"/></g>`,
		"fallback": "uix:account-verification",
	});
}

export default Component;
