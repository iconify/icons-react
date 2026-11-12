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
		"content": `<style>.sdurkerxr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 17V9c0-3 1-4 3-4c3 0 4 2 4 4c0 3-2 4-2 7v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm18-2V7c0-3-1-4-3-4c-3 0-4 2-4 4c0 3 2 4 2 7v3a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2zM3 17h5m13-2h-5");
}
</style><path class="sdurkerxr"/>`,
		"fallback": "coolicons:footprints-round",
	});
}

export default Component;
