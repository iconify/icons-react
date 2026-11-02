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

.lzhz0743k {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 17h12V3H5v16m2-2a2 2 0 1 0 0 4m0 0h10v-4");
}

.o-4mxt4ss {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4 3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H7a1 1 0 0 0-1 1a1 1 0 0 1-2 0Z");
}
</style><g class="ft5dv1b6b"><path class="o-4mxt4ss"/><path class="lzhz0743k"/></g>`,
		"fallback": "coolicons:book-duotone-sharp",
	});
}

export default Component;
