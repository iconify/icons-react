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
		"content": `<style>.nz26kpbeo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 12V9a2 2 0 1 1 4 0a2 2 0 1 1 4 0a2 2 0 1 1 4 0v6a6 6 0 0 1-6 6h-4a6 6 0 0 1-6-6v-3a2 2 0 1 1 4 0m4-3v3m4-3v3m-8 0v3");
}
</style><path class="nz26kpbeo"/>`,
		"fallback": "coolicons:hand-grab-sharp",
	});
}

export default Component;
