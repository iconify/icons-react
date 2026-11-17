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

.nkta-tnve {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m7 11l6-6a1.414 1.414 0 0 1 2 0l4 4a1.414 1.414 0 0 1 0 2l-6 6zm1 1l-5 5v2a1 1 0 0 0 1 1h4l4-4");
}

.nx39yrz6d {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M13 5a1.415 1.415 0 0 1 2 0l4 4a1.415 1.415 0 0 1 0 2l-6 6l-6-6Z");
}
</style><g class="ft5dv1b6b"><path class="nx39yrz6d"/><path class="nkta-tnve"/></g>`,
		"fallback": "coolicons:highlighter-duotone",
	});
}

export default Component;
