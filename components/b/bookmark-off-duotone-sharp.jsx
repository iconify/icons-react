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
		"content": `<style>.bll58zlnb {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 4h6v7m0 6v3l-6-4l-6 4V5M3 2l19 19");
}

.ft5dv1b6b {
  fill: none;
}

.njm00vu1l {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M11 4h7v7Zm7 16l-6-4l-6 4V5l12 12Z");
}
</style><g class="ft5dv1b6b"><path class="njm00vu1l"/><path class="bll58zlnb"/></g>`,
		"fallback": "coolicons:bookmark-off-duotone-sharp",
	});
}

export default Component;
