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
		"content": `<style>.b9lwcdbld {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M9 9a3 3 0 1 1 6 0v6a3 3 0 1 1-6 0Z");
}

.ft5dv1b6b {
  fill: none;
}

.h9a4pqbei {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 9a3 3 0 0 1 6 0v6a3 3 0 0 1-6 0ZM4 3v18M20 3v18");
}
</style><g class="ft5dv1b6b"><path class="b9lwcdbld"/><path class="h9a4pqbei"/></g>`,
		"fallback": "coolicons:distribute-horizontal-duotone-round",
	});
}

export default Component;
