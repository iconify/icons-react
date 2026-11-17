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
		"content": `<style>.fm8cbmoax {
  d: path("M13 3H7M5 7v14h14m0-6V9m-6-6l6 6m-6-6v6h6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.zo-v9hbio {
  stroke-opacity: 0.4;
  d: path("m2 4l18 18");
}
</style><g class="nrj6p8qat"><path class="zo-v9hbio"/><path class="fm8cbmoax"/></g>`,
		"fallback": "coolicons:file-off-duocolor-sharp",
	});
}

export default Component;
