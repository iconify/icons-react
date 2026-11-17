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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.k1wgqjbun {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m3 3l18 6l-6 3l5 5l-3 3l-5-5l-3 6Z");
}

.uu96rwblr {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m3 3l18 6l-6 3l5 5l-3 3l-5-5l-3 6z");
}
</style><g class="ft5dv1b6b"><path class="k1wgqjbun"/><path class="uu96rwblr"/></g>`,
		"fallback": "coolicons:cursor-duotone-sharp",
	});
}

export default Component;
