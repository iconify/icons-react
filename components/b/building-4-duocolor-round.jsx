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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.prm-8fb4l {
  d: path("M3 20h18M5 20V8a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v12m0-11a4 4 0 0 1 4 4v7");
}

.r2ln9-bjf {
  stroke-opacity: 0.4;
  d: path("M9 8h2m-2 4h2");
}
</style><g class="nrj6p8qat"><path class="r2ln9-bjf"/><path class="prm-8fb4l"/></g>`,
		"fallback": "coolicons:building-4-duocolor-round",
	});
}

export default Component;
