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
		"content": `<style>.dyunt-bon {
  stroke-opacity: 0.4;
  d: path("M5 8a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pyhjy9bbp {
  d: path("M3 6a2 2 0 1 0 4 0a2 2 0 0 0-4 0m14 0a2 2 0 1 0 4 0a2 2 0 0 0-4 0m-7 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0m2-6v4");
}
</style><g class="nrj6p8qat"><path class="dyunt-bon"/><path class="pyhjy9bbp"/></g>`,
		"fallback": "coolicons:git-fork-duocolor-round",
	});
}

export default Component;
