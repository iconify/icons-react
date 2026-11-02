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
		"content": `<style>.nm6ycbbue {
  d: path("M4 11v3a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-3a2 2 0 1 0-4 0a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2a2 2 0 1 0-4 0m2 7v2m12-2v2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.won3e36nd {
  stroke-opacity: 0.4;
  d: path("M6 9V8a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1");
}
</style><g class="nrj6p8qat"><path class="won3e36nd"/><path class="nm6ycbbue"/></g>`,
		"fallback": "coolicons:armchair-duocolor-round",
	});
}

export default Component;
