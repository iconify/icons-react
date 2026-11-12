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
		"content": `<style>.kkq621zwm {
  stroke-opacity: 0.4;
  d: path("m9 9l6 6m1-12v2m3 0l2-2m-2 5h2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.x26pvfbkp {
  d: path("m12 6l6 6l-4 4h-3l-5 5l-3-3l5-5v-3z");
}
</style><g class="nrj6p8qat"><path class="kkq621zwm"/><path class="x26pvfbkp"/></g>`,
		"fallback": "coolicons:flashlight-on-duocolor-sharp",
	});
}

export default Component;
