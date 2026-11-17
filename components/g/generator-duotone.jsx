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

.ih_5fsbtd {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M5 7h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2");
}

.zi9w-wg5s {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm3 10v2m12-2v2m-4-10h3m-3 4h3M5 7V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2M9 10l-3 3h4l-3 3");
}
</style><g class="ft5dv1b6b"><path class="ih_5fsbtd"/><path class="zi9w-wg5s"/></g>`,
		"fallback": "coolicons:generator-duotone",
	});
}

export default Component;
