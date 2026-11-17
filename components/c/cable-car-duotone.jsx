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

.se8yimb1k {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 11h6a7.25 7.25 0 0 1 0 10H9a7.25 7.25 0 0 1 0-10m-2 5h10M4 9l16-4m-8 2v4m-2-7h.01M14 3h.01");
}

.x93jnvbiw {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M15 11a7.25 7.25 0 0 1 0 10H9a7.25 7.25 0 0 1 0-10Z");
}
</style><g class="ft5dv1b6b"><path class="x93jnvbiw"/><path class="se8yimb1k"/></g>`,
		"fallback": "coolicons:cable-car-duotone",
	});
}

export default Component;
