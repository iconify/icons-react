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

.rvljdtjem {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 6h9v2M8 20H3V4h7l2 2m1 15v-3l5-5l3 3l-5 5Z");
}

.veq3gb49r {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m10 4l2 2h9v2H8v12H3V4Zm3 17v-3l5-5l3 3l-5 5Z");
}
</style><g class="ft5dv1b6b"><path class="veq3gb49r"/><path class="rvljdtjem"/></g>`,
		"fallback": "coolicons:folder-edit-corner-duotone-sharp",
	});
}

export default Component;
