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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.tbwggnlnm {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 7h4l3-3h4l3 3h4v13H3zm6 6a3 3 0 1 0 6 0a3 3 0 0 0-6 0");
}

.y_z4w1b4u {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m7 7l3-3h4l3 3h4v13H3V7Zm5 9a3 3 0 1 0 0-6a3 3 0 0 0 0 6");
}
</style><g class="ft5dv1b6b"><path class="y_z4w1b4u"/><path class="tbwggnlnm"/></g>`,
		"fallback": "coolicons:camera-duotone-sharp",
	});
}

export default Component;
