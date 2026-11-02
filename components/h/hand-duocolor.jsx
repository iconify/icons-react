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
		"content": `<style>.wcd1e9z4h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 13V7a2 2 0 1 1 4 0V5a2 2 0 1 1 4 0v3a2 2 0 1 1 4 0v8a5 5 0 0 1-5 5h-4c-.64 0-1.36-.36-2-1l-6-6c-2-2 1-5 3-3zm4-6v5m4-4v4");
}
</style><path class="wcd1e9z4h"/>`,
		"fallback": "coolicons:hand-duocolor",
	});
}

export default Component;
