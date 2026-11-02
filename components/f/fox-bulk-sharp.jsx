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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.ku_iq4g4n {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M4 3a1.002 1.002 0 0 1 1.707-.707L10.414 7h3.172l4.707-4.707A1 1 0 0 1 20 3v6.838l.949 2.846c.119.359.026.755-.242 1.023l-8 8a1 1 0 0 1-1.414 0l-8-8a1 1 0 0 1-.242-1.023L4 9.838Z");
}

.u-t2g1brr {
  d: path("M10.707 12.293a.999.999 0 1 1-1.414 1.414l-1-1a.999.999 0 1 1 1.414-1.414Zm4 1.414a.999.999 0 1 1-1.414-1.414l1-1a.999.999 0 1 1 1.414 1.414ZM12.01 15a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2Z");
}
</style><g class="cuyn6tgcc"><path class="ku_iq4g4n"/><path class="u-t2g1brr"/></g>`,
		"fallback": "coolicons:fox-bulk-sharp",
	});
}

export default Component;
