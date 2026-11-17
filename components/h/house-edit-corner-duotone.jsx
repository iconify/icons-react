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

.jxvrugb_r {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M10 8a2 2 0 0 0-2 2v11H6a2 2 0 0 1-2-2v-8.092c0-.577.249-1.126.683-1.506l6-5.25a2 2 0 0 1 2.634 0L17.714 8Zm3 13v-3l5-5l3 3l-5 5Z");
}

.sw-zpbcvv {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 21H6a2 2 0 0 1-2-2v-8.092a2 2 0 0 1 .683-1.506l6-5.25a2 2 0 0 1 2.634 0L17.714 8M13 21v-3l5-5l3 3l-5 5Z");
}
</style><g class="ft5dv1b6b"><path class="jxvrugb_r"/><path class="sw-zpbcvv"/></g>`,
		"fallback": "coolicons:house-edit-corner-duotone",
	});
}

export default Component;
