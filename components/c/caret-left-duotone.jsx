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
		"content": `<style>.d4l4jfd5o {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m14 8l-4 4l4 4Z");
}

.ft5dv1b6b {
  fill: none;
}

.h98qfj0yp {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M14 8v8l-4-4Z");
}
</style><g class="ft5dv1b6b"><path class="h98qfj0yp"/><path class="d4l4jfd5o"/></g>`,
		"fallback": "coolicons:caret-left-duotone",
	});
}

export default Component;
