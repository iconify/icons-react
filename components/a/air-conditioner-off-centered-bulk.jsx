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
		"content": `<style>.aakag8i1b {
  d: path("M7 12h10a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2");
}

.cuyn6tgcc {
  fill: currentColor;
}

.obej0-_ao {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 10a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Z");
}
</style><g class="cuyn6tgcc"><path class="obej0-_ao"/><path class="aakag8i1b"/></g>`,
		"fallback": "coolicons:air-conditioner-off-centered-bulk",
	});
}

export default Component;
