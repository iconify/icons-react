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
		"content": `<style>.fvc8d8ivs {
  d: path("M12 21.5V6m-1.5-1.5a1.5 2.25 0 1 0 3 0a1.5 2.25 0 1 0-3 0m-2.75 5a1.5 2.25 0 1 0 3 0a1.5 2.25 0 1 0-3 0m5.5 0a1.5 2.25 0 1 0 3 0a1.5 2.25 0 1 0-3 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vvs79m6jd {
  d: path("M7.75 14a1.5 2.25 0 1 0 3 0a1.5 2.25 0 1 0-3 0m5.5 0a1.5 2.25 0 1 0 3 0a1.5 2.25 0 1 0-3 0");
}
</style><g class="hntgybcog"><path class="fvc8d8ivs"/><path class="vvs79m6jd"/></g>`,
		"fallback": "uix:carbs-macro",
	});
}

export default Component;
