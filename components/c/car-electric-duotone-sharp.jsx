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
		"content": `<style>.am61gebvx {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m13 8l-3 3h4l-3 3m-7 4v-8l3-6h10l3 6v8zm2 0h2v2H6Zm10 0h2v2h-2ZM3 10h1m16 0h1");
}

.ft5dv1b6b {
  fill: none;
}

.w9-vhcbwg {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m4 10l3-6h10l3 6v8H4Z");
}
</style><g class="ft5dv1b6b"><path class="w9-vhcbwg"/><path class="am61gebvx"/></g>`,
		"fallback": "coolicons:car-electric-duotone-sharp",
	});
}

export default Component;
