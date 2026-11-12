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
		"content": `<style>.d5xge1bgl {
  stroke-opacity: 0.4;
  d: path("M10 12h4");
}

.e11rnwbgh {
  d: path("m7 8l-4 4l4 4m10-8l4 4l-4 4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="d5xge1bgl"/><path class="e11rnwbgh"/></g>`,
		"fallback": "coolicons:api-duocolor-round",
	});
}

export default Component;
