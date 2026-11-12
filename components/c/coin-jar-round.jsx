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
		"content": `<style>.nc_iqtb9j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 12v2l-1 1c-.64.64-1 1.72-1 3v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1c0-1.28-.36-2.36-1-3l-1-1v-2m-9 0h10M6 5a2 2 0 1 0 4 0a2 2 0 0 0-4 0m7 2a2 2 0 1 0 4 0a2 2 0 0 0-4 0");
}
</style><path class="nc_iqtb9j"/>`,
		"fallback": "coolicons:coin-jar-round",
	});
}

export default Component;
