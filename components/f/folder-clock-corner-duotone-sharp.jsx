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

.luywdci8b {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 6h9v2M8 20H3V4h7l2 2m0 11a5 5 0 1 0 10 0a5 5 0 0 0-10 0m5-2v2h2");
}

.mdrxfkb-g {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 4h7l2 2h9v2H8v12H3Z");
}
</style><g class="ft5dv1b6b"><path class="mdrxfkb-g"/><path class="luywdci8b"/></g>`,
		"fallback": "coolicons:folder-clock-corner-duotone-sharp",
	});
}

export default Component;
