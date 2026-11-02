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
		"content": `<style>.bm2s2x7kz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M20 20c-.724.724-1.895 1-3 1H7a4 4 0 0 1-4-4V7c0-1.105.276-2.276 1-3m5-1h8a4 4 0 0 1 4 4v8M3 17l7-7m5-2a1 1 0 1 0 2 0a1 1 0 0 0-2 0M2 2l20 20");
}
</style><path class="bm2s2x7kz"/>`,
		"fallback": "coolicons:image-off-round",
	});
}

export default Component;
