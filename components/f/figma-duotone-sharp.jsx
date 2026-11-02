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
		"content": `<style>.b6ftoet_c {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M9 3h3v6H9a3 3 0 1 1 0-6m6 12a3 3 0 1 1 0-6a3 3 0 0 1 0 6m-6 0h3v3a3 3 0 1 1-3-3");
}

.ft5dv1b6b {
  fill: none;
}

.wgsxw9bbd {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 15h3m-3 0a3 3 0 1 0 3 3v-3M9 9h3M9 9a3 3 0 0 1 0-6h3m0 6V3m0 9a3 3 0 1 0 6 0a3 3 0 0 0-6 0m-3 3a3 3 0 1 1 0-6m3 6v-3m0-3v3m0-3h3m-3-6h3a3 3 0 1 1 0 6");
}
</style><g class="ft5dv1b6b"><path class="b6ftoet_c"/><path class="wgsxw9bbd"/></g>`,
		"fallback": "coolicons:figma-duotone-sharp",
	});
}

export default Component;
