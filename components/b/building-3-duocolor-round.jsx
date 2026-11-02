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
		"content": `<style>.b896dj8wk {
  stroke-opacity: 0.4;
  d: path("M7 12V8a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v12");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o78nfacdg {
  d: path("M3 20h18M5 20v-4c0-1.28.36-2.36 1-3l2-2a2.83 2.83 0 0 1 4 0l2 2c.64.64 1 1.72 1 3v4");
}
</style><g class="nrj6p8qat"><path class="b896dj8wk"/><path class="o78nfacdg"/></g>`,
		"fallback": "coolicons:building-3-duocolor-round",
	});
}

export default Component;
