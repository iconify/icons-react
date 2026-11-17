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

.qpa4tyb4s {
  d: path("M15.664 10.919a1 1 0 0 1 .336.748V17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-5.333a1 1 0 0 1 .336-.748l3-2.666a1 1 0 0 1 1.328 0ZM12 10.338l-2 1.778V16h4v-3.884Z");
}

.sq8cw3bgr {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m12.664 2.253l9 8a1 1 0 0 1 .334.688a1 1 0 0 1-.251.723l-.013.015a1 1 0 0 1-1.412.083L20 11.476V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9.524l-.322.286a1 1 0 0 1-1.412-.083l-.013-.015a1 1 0 0 1 .083-1.411l1.999-1.778h.001l7-6.222a1 1 0 0 1 1.328 0");
}
</style><g class="cuyn6tgcc"><path class="sq8cw3bgr"/><path class="qpa4tyb4s"/></g>`,
		"fallback": "coolicons:house-alt-4-bulk-sharp",
	});
}

export default Component;
