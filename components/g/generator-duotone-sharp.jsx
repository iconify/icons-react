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

.qe79kmbyp {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 7h18v12H3Zm3 12v2m12-2v2m-4-10h3m-3 4h3M5 7V3h14v4M9 10l-3 3h4l-3 3");
}

.zf71frbvo {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 7h18v12H3Z");
}
</style><g class="ft5dv1b6b"><path class="zf71frbvo"/><path class="qe79kmbyp"/></g>`,
		"fallback": "coolicons:generator-duotone-sharp",
	});
}

export default Component;
