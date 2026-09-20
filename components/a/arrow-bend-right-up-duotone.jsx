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

.em9cikb4d {
  d: path("m205.66 74.34l-48-48a8 8 0 0 0-11.32 0l-48 48A8 8 0 0 0 104 88h40v40a88.1 88.1 0 0 1-88 88a8 8 0 0 0 0 16a104.11 104.11 0 0 0 104-104V88h40a8 8 0 0 0 5.66-13.66M123.31 72L152 43.31L180.69 72Z");
}

.s-nrecbfb {
  d: path("M200 80h-96l48-48Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="s-nrecbfb"/><path class="em9cikb4d"/></g>`,
		"fallback": "ph:arrow-bend-right-up-duotone",
	});
}

export default Component;
