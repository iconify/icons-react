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
		"content": `<style>.adg7etx2n {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 6h6v12H9ZM4 3v18M20 3v18");
}

.ft5dv1b6b {
  fill: none;
}

.lf8acxbvk {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M9 6h6v12H9Z");
}
</style><g class="ft5dv1b6b"><path class="lf8acxbvk"/><path class="adg7etx2n"/></g>`,
		"fallback": "coolicons:distribute-horizontal-duotone-sharp",
	});
}

export default Component;
