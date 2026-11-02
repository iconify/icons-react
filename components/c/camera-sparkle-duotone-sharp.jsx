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
		"content": `<style>.baxypjuno {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m7 7l3-3h4l3 3h4v13H3V7Z");
}

.ft5dv1b6b {
  fill: none;
}

.k4vj3t_nw {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 7h4l3-3h4l3 3h4v13H3zm9 1c0 2 2 4 4 4c-2 0-4 2-4 4c0-2-2-4-4-4c2 0 4-2 4-4");
}
</style><g class="ft5dv1b6b"><path class="baxypjuno"/><path class="k4vj3t_nw"/></g>`,
		"fallback": "coolicons:camera-sparkle-duotone-sharp",
	});
}

export default Component;
