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

.tnwme4bjd {
  d: path("M5 18a2 2 0 0 1-2-2V9a4 4 0 0 1 4-4h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2M9 18h6M3 10h12M9 5v5m6-5v7h6");
}

.x-d5t_gmw {
  stroke-opacity: 0.4;
  d: path("M5 18a2 2 0 1 0 4 0a2 2 0 0 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 0 0-4 0");
}
</style><g class="nrj6p8qat"><path class="x-d5t_gmw"/><path class="tnwme4bjd"/></g>`,
		"fallback": "coolicons:bus-side-duocolor-round",
	});
}

export default Component;
