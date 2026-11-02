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
		"content": `<style>.n736056kd {
  d: path("M15 13a3 3 0 0 1 6 0v4a3 3 0 0 1-6 0Z");
}

.noeq1abwj {
  stroke-opacity: 0.4;
  d: path("M17 6a2 2 0 0 0-2-2H7a4 4 0 0 0-4 4v4a4 4 0 0 0 4 4h4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="noeq1abwj"/><path class="n736056kd"/></g>`,
		"fallback": "coolicons:devices-duocolor-round",
	});
}

export default Component;
