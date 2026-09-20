import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

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

.q9b7nwxtc {
  d: path("m221.66 74.34l-48-48a8 8 0 0 0-11.32 0l-48 48A8 8 0 0 0 120 88h40v80a48 48 0 0 1-96 0V80a8 8 0 0 0-16 0v88a64 64 0 0 0 128 0V88h40a8 8 0 0 0 5.66-13.66M139.31 72L168 43.31L196.69 72Z");
}

.vziog9bmd {
  d: path("M216 80h-96l48-48Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="vziog9bmd"/><path class="q9b7nwxtc"/></g>`,
		"fallback": "ph:arrow-u-right-up-duotone",
	});
}

export default Component;
