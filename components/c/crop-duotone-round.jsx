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
		"content": `<style>.jv3ylgrfv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 3v11a4 4 0 0 0 4 4h11M3 6h3m12 12v3M10 6h4a4 4 0 0 1 4 4v4");
}
</style><path class="jv3ylgrfv"/>`,
		"fallback": "coolicons:crop-duotone-round",
	});
}

export default Component;
