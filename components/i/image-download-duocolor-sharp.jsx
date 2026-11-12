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

.v-cy__q4i {
  d: path("M3 3h18v18H3Zm0 14l4-4l8 8");
}

.w10xa2b9e {
  stroke-opacity: 0.4;
  d: path("m11 10l3 3l3-3m-3 3V7");
}
</style><g class="nrj6p8qat"><path class="w10xa2b9e"/><path class="v-cy__q4i"/></g>`,
		"fallback": "coolicons:image-download-duocolor-sharp",
	});
}

export default Component;
