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

.mv0ep_bvh {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3.293 16.293L10.586 9L9.293 7.707a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0l7 7a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0L15 13.414l-7.293 7.293a3.121 3.121 0 1 1-4.414-4.414");
}

.trnfkbbba {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m14 3l7 7l-4 4l-7-7zm-1 17h8m-6-8l-8 8a2.121 2.121 0 1 1-3-3l8-8");
}
</style><g class="ft5dv1b6b"><path class="mv0ep_bvh"/><path class="trnfkbbba"/></g>`,
		"fallback": "coolicons:gavel-duotone-sharp",
	});
}

export default Component;
