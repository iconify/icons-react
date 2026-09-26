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
		"content": `<style>.ol24cq_hg {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 2L3 21L22 21M6.7486 17.6286L9 12L19 11L21.0513 4.846");
}
</style><path class="ol24cq_hg"/>`,
		"fallback": "keyline-icons:chart-line-sharp-fill",
	});
}

export default Component;
