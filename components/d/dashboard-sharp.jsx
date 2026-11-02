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
		"content": `<style>.ltjdj5blt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 4h6v8H4Zm0 12h6v4H4Zm10-4h6v8h-6Zm0-8h6v4h-6Z");
}
</style><path class="ltjdj5blt"/>`,
		"fallback": "coolicons:dashboard-sharp",
	});
}

export default Component;
