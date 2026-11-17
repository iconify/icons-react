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
		"content": `<style>.cjeceabih {
  d: path("M8 5h.01a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2m3 0h.01a1 1 0 0 1 0 2H11a1 1 0 0 1 0-2M4 8h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2m4 4h8a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2");
}

.cuyn6tgcc {
  fill: currentColor;
}

.nrnkr7bfl {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3Z");
}
</style><g class="cuyn6tgcc"><path class="nrnkr7bfl"/><path class="cjeceabih"/></g>`,
		"fallback": "coolicons:dishwasher-bulk",
	});
}

export default Component;
