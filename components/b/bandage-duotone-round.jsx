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

.lrn0pnbwk {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M7 6h10v12H7Z");
}

.pkh-mlbuc {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 10a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Zm4-4v12M17 6v12m-7-8h.01M14 10h.01M10 14h.01M14 14h.01");
}
</style><g class="ft5dv1b6b"><path class="lrn0pnbwk"/><path class="pkh-mlbuc"/></g>`,
		"fallback": "coolicons:bandage-duotone-round",
	});
}

export default Component;
