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

.mdrxfkb-g {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 4h7l2 2h9v2H8v12H3Z");
}

.vf8g9pg3p {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 6h9v2M8 20H3V4h7l2 2m1 11h8m-4-4v8");
}
</style><g class="ft5dv1b6b"><path class="mdrxfkb-g"/><path class="vf8g9pg3p"/></g>`,
		"fallback": "coolicons:folder-plus-corner-duotone-sharp",
	});
}

export default Component;
