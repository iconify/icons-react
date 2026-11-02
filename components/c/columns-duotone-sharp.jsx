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
		"content": `<style>.etojbffjv {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 4h6v16H4Zm10 0h6v16h-6Z");
}

.ft5dv1b6b {
  fill: none;
}

.ojig8ib4r {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M10 4v16H4V4Zm10 0v16h-6V4Z");
}
</style><g class="ft5dv1b6b"><path class="ojig8ib4r"/><path class="etojbffjv"/></g>`,
		"fallback": "coolicons:columns-duotone-sharp",
	});
}

export default Component;
