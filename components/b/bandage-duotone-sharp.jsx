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

.hguje46yu {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 6h18v12H3Zm4 0v12M17 6v12m-7-8h.01M14 10h.01M10 14h.01M14 14h.01");
}

.lrn0pnbwk {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M7 6h10v12H7Z");
}
</style><g class="ft5dv1b6b"><path class="lrn0pnbwk"/><path class="hguje46yu"/></g>`,
		"fallback": "coolicons:bandage-duotone-sharp",
	});
}

export default Component;
