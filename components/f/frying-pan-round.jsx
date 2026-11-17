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
		"content": `<style>.bqle3ebvi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 11h12v1a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4zm12 0l6-3");
}
</style><path class="bqle3ebvi"/>`,
		"fallback": "coolicons:frying-pan-round",
	});
}

export default Component;
