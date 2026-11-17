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
		"content": `<style>.bu_6_nbal {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M12 6h7a2 2 0 0 1 2 2h-9a4 4 0 0 0-4 4v8H7a4 4 0 0 1-4-4V6a2 2 0 0 1 2-2h5Zm5 7c.002 2.005 1.995 3.998 4 4c-2.005.002-3.998 1.995-4 4c-.002-2.005-1.995-3.998-4-4c2.005-.002 3.998-1.995 4-4");
}

.ft5dv1b6b {
  fill: none;
}

.i837xzbhc {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 6h7a2 2 0 0 1 2 2M8 20H7a4 4 0 0 1-4-4V6a2 2 0 0 1 2-2h5l2 2m5 7c0 2 2 4 4 4c-2 0-4 2-4 4c0-2-2-4-4-4c2 0 4-2 4-4");
}
</style><g class="ft5dv1b6b"><path class="bu_6_nbal"/><path class="i837xzbhc"/></g>`,
		"fallback": "coolicons:folder-sparkle-corner-duotone-round",
	});
}

export default Component;
