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
		"content": `<style>.m-ua3ebgj {
  stroke-opacity: 0.4;
  d: path("M14 7v3m0 3h.01");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.v-cy__q4i {
  d: path("M3 3h18v18H3Zm0 14l4-4l8 8");
}
</style><g class="nrj6p8qat"><path class="m-ua3ebgj"/><path class="v-cy__q4i"/></g>`,
		"fallback": "coolicons:image-warning-duocolor-sharp",
	});
}

export default Component;
