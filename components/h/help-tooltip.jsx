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

.oaq2vqddh {
  d: path("M5 2.5h14A2.5 2.5 0 0 1 21.5 5v10a2.5 2.5 0 0 1-2.5 2.5h-4.5L12 21l-2.5-3.5H5A2.5 2.5 0 0 1 2.5 15V5A2.5 2.5 0 0 1 5 2.5");
}

.pav66begt {
  d: path("M9.5 8a2.5 2.5 0 1 1 3.75 2.25c-.75.5-1.25 1-1.25 2M12 15h.01");
}
</style><g class="hntgybcog"><path class="oaq2vqddh"/><path class="pav66begt"/></g>`,
		"fallback": "uix:help-tooltip",
	});
}

export default Component;
