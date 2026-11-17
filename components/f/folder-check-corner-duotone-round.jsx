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
		"content": `<style>.efvg9_tnb {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 6h7a2 2 0 0 1 2 2M8 20H7a4 4 0 0 1-4-4V6a2 2 0 0 1 2-2h5l2 2m1 11l3 3l5-6");
}

.ft5dv1b6b {
  fill: none;
}

.ny257zbtk {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m10 4l2 2h7a2 2 0 0 1 2 2h-9a4 4 0 0 0-4 4v8H7a4 4 0 0 1-4-4V6a2 2 0 0 1 2-2Z");
}
</style><g class="ft5dv1b6b"><path class="ny257zbtk"/><path class="efvg9_tnb"/></g>`,
		"fallback": "coolicons:folder-check-corner-duotone-round",
	});
}

export default Component;
