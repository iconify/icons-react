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

.lr-jwabpa {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 3h14v14M3 7h14v14H3Zm0 10l5-5l4 4l2-2l3 3");
}

.qx2-4wb0y {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 7h14v14H3Z");
}
</style><g class="ft5dv1b6b"><path class="qx2-4wb0y"/><path class="lr-jwabpa"/></g>`,
		"fallback": "coolicons:images-duotone-sharp",
	});
}

export default Component;
