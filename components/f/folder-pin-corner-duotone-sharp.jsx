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
		"content": `<style>.ed_xtockc {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 6h9v2M8 20H3V4h7l2 2m3 7h4v3l2 2h-8l2-2zm-1 0h6m-3 5v3");
}

.ft5dv1b6b {
  fill: none;
}

.ik-hi_zzs {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m10 4l2 2h9v2H8v12H3V4Zm5 9h4v3l2 2h-8l2-2Z");
}
</style><g class="ft5dv1b6b"><path class="ik-hi_zzs"/><path class="ed_xtockc"/></g>`,
		"fallback": "coolicons:folder-pin-corner-duotone-sharp",
	});
}

export default Component;
