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
		"content": `<style>.f9znh2twl {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M10 7v10a3 3 0 1 1-6 0V7a3 3 0 1 1 6 0m10 0v10a3 3 0 1 1-6 0V7a3 3 0 1 1 6 0");
}

.ft5dv1b6b {
  fill: none;
}

.jeke5b99r {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 7a3 3 0 0 1 6 0v10a3 3 0 0 1-6 0Zm10 0a3 3 0 0 1 6 0v10a3 3 0 0 1-6 0Z");
}
</style><g class="ft5dv1b6b"><path class="f9znh2twl"/><path class="jeke5b99r"/></g>`,
		"fallback": "coolicons:columns-duotone-round",
	});
}

export default Component;
