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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.qv4k2hbax {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 12v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-8a6.1 6.1 0 0 0-12 0m0 0h12M9.27 7.006A6.1 6.1 0 0 1 21 8m-8.653 0H21m0 0v8a1 1 0 0 1-1 1h-5");
}

.w5esql8ug {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 20v-8a6.1 6.1 0 0 1 12 0v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1");
}
</style><g class="ft5dv1b6b"><path class="w5esql8ug"/><path class="qv4k2hbax"/></g>`,
		"fallback": "coolicons:biogas-plant-duotone",
	});
}

export default Component;
