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
		"content": `<style>.byojx7bma {
  d: path("m12 12.414l-5.293 5.293a.999.999 0 1 1-1.414-1.414l6-6a1 1 0 0 1 1.414 0l6 6a.999.999 0 1 1-1.414 1.414Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.sdlo5cbhf {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M6 6h12a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2");
}
</style><g class="cuyn6tgcc"><path class="sdlo5cbhf"/><path class="byojx7bma"/></g>`,
		"fallback": "coolicons:chevron-up-to-line-bulk-sharp",
	});
}

export default Component;
