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

.h1hao2eud {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 16v-5a5 5 0 0 1 5-5m4 0a5 5 0 0 1 5 5v5M3 18a2 2 0 0 1 2-2h14a2 2 0 1 1 0 4H5a2 2 0 0 1-2-2m7-7V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v6");
}

.z4sdz7vhh {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M5 16v-5a5 5 0 0 1 5-5V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1a5 5 0 0 1 5 5v5a2 2 0 1 1 0 4H5a2 2 0 1 1 0-4");
}
</style><g class="ft5dv1b6b"><path class="z4sdz7vhh"/><path class="h1hao2eud"/></g>`,
		"fallback": "coolicons:hard-hat-duotone",
	});
}

export default Component;
