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

.st37r9b1t {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M19 11v7h-7a7 7 0 1 1 7-7");
}

.ucerd28zu {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M19 11a7 7 0 1 0-7 7h7m-3 3l3-3l-3-3");
}
</style><g class="ft5dv1b6b"><path class="st37r9b1t"/><path class="ucerd28zu"/></g>`,
		"fallback": "coolicons:arrow-loop-right-duotone",
	});
}

export default Component;
