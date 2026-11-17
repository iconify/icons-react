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
		"content": `<style>.bjs4labdk {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11 5a2 2 0 1 1 4 0v2a2 2 0 1 1-4 0ZM7 9h.01M6 15l-3 3l3 3m-3-3h18");
}

.ft5dv1b6b {
  fill: none;
}

.qomo1pb0f {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M15 5v2a2 2 0 1 1-4 0V5a2 2 0 1 1 4 0");
}
</style><g class="ft5dv1b6b"><path class="qomo1pb0f"/><path class="bjs4labdk"/></g>`,
		"fallback": "coolicons:decimal-decrease-duotone-sharp",
	});
}

export default Component;
