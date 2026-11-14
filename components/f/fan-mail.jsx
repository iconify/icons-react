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
		"content": `<style>.er0-4ab3o {
  d: path("M6 4.5h12A3.5 3.5 0 0 1 21.5 8v8a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 16V8A3.5 3.5 0 0 1 6 4.5m-3.5 2l6.75 7m12.25-7l-6.75 7");
}

.fiq_6-b4g {
  d: path("m12 16.5l-2.75-3A2.25 2.25 0 0 1 12 10.25a2.25 2.25 0 0 1 2.75 3.25Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="er0-4ab3o"/><path class="fiq_6-b4g"/></g>`,
		"fallback": "uix:fan-mail",
	});
}

export default Component;
