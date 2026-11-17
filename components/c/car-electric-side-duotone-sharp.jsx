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
		"content": `<style>.d9820fbtd {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 18v-6l5-5h5l5 5h3v6h-2a1.999 1.999 0 0 0-3-1.732c-.619.357-1 1.017-1 1.732H9a1.999 1.999 0 0 0-3-1.732c-.619.357-1 1.017-1 1.732Z");
}

.ft5dv1b6b {
  fill: none;
}

.h7ld43qoo {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 18a2 2 0 1 0 4 0a2 2 0 0 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 0 0-4 0m-4-8l-2 2h4l-2 2m-6 4H3v-6l5-5h5l5 5h3v6h-2M9 18h6");
}
</style><g class="ft5dv1b6b"><path class="d9820fbtd"/><path class="h7ld43qoo"/></g>`,
		"fallback": "coolicons:car-electric-side-duotone-sharp",
	});
}

export default Component;
