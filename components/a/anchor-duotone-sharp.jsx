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

.j9w1q5btm {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 7v14m9-9a9 9 0 0 1-18 0m0 0h2m16 0h-2M9 11h6m-5-6a2 2 0 1 0 4 0a2 2 0 0 0-4 0");
}

.xo7xrdb-d {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M10 5a2 2 0 1 1 3.999-.001A2 2 0 0 1 10 5");
}
</style><g class="ft5dv1b6b"><path class="xo7xrdb-d"/><path class="j9w1q5btm"/></g>`,
		"fallback": "coolicons:anchor-duotone-sharp",
	});
}

export default Component;
