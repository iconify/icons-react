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
		"content": `<style>.e5kwf6bjt {
  stroke-opacity: 0.4;
  d: path("M9 6h.01M15 6h.01M9 12h.01M15 12h.01M9 18h.01M15 18h.01");
}

.i20zhebzg {
  d: path("M6 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h2M18 3h2a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="e5kwf6bjt"/><path class="i20zhebzg"/></g>`,
		"fallback": "coolicons:brackets-dots-duocolor",
	});
}

export default Component;
