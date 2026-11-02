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
		"content": `<style>.lpujgzbhe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 3v8m0 4v6m6-18v2m0 4v12m6-18v6m0 4v8M4 15h4m2-6h4m2 4h4");
}
</style><path class="lpujgzbhe"/>`,
		"fallback": "coolicons:equalizer-duotone-round",
	});
}

export default Component;
