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

.o8nax9bld {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 7a3 3 0 0 1 3-3h10a3 3 0 0 1 0 6H7a3 3 0 0 1-3-3m2 10a3 3 0 0 1 3-3h6a3 3 0 0 1 0 6H9a3 3 0 0 1-3-3m6-14v18");
}

.z4_127bpi {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M7 3h10a4 4 0 0 1 0 8H7a4 4 0 0 1 0-8m2 10h6a4 4 0 0 1 0 8H9a4 4 0 0 1 0-8");
}
</style><g class="ft5dv1b6b"><path class="z4_127bpi"/><path class="o8nax9bld"/></g>`,
		"fallback": "coolicons:align-center-horizontal-duotone-round",
	});
}

export default Component;
