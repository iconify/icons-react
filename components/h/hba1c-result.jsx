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
		"content": `<style>.bboqyub8u {
  d: path("M8.25 12.75a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m5 4.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r9vtf9bxb {
  d: path("M12 2.5c3.5 4.5 7 8 7 12c0 3.9-3.1 7-7 7s-7-3.1-7-7c0-4 3.5-7.5 7-12M9.25 18.25l5.5-6.5");
}
</style><g class="hntgybcog"><path class="r9vtf9bxb"/><path class="bboqyub8u"/></g>`,
		"fallback": "uix:hba1c-result",
	});
}

export default Component;
