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

.lyluz8blw {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 9h4v6h-4Zm0-4a3.605 3.605 0 1 0-5 5m14 0a3.605 3.605 0 1 0-5-5m0 14a3.605 3.605 0 1 0 5-5M5 14a3.605 3.605 0 1 0 5 5M7 7l3 3m7-3l-3 3m-7 7l3-3m7 3l-3-3");
}

.vzsec_82q {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M10 9h4v6h-4Z");
}
</style><g class="ft5dv1b6b"><path class="vzsec_82q"/><path class="lyluz8blw"/></g>`,
		"fallback": "coolicons:drone-duotone-sharp",
	});
}

export default Component;
