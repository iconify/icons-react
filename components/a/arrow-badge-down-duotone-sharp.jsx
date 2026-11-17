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

.pgjztdb6r {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M19 9V4l-7 7l-7-7v9l7 7l7-7z");
}

.q6j7t1r2o {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M19 4v9l-7 7l-7-7V4l7 7Z");
}
</style><g class="ft5dv1b6b"><path class="q6j7t1r2o"/><path class="pgjztdb6r"/></g>`,
		"fallback": "coolicons:arrow-badge-down-duotone-sharp",
	});
}

export default Component;
