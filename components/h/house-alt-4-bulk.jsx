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

.tm_4qmbuf {
  d: path("M10 18a2 2 0 0 1-2-2v-3.884c0-.572.244-1.116.671-1.495l2-1.778a2 2 0 0 1 2.658 0l2 1.778c.427.379.671.923.671 1.495V16a2 2 0 0 1-2 2Zm4-2v-3.884l-2-1.778l-2 1.778V16Z");
}

.uq5r2pjip {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m13.993 3.434l7.671 6.819a1 1 0 0 1 .334.688a1 1 0 0 1-.251.723l-.013.015a1 1 0 0 1-1.412.083L20 11.476V19a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-7.524l-.322.286a1 1 0 0 1-1.412-.083l-.013-.015a1 1 0 0 1 .083-1.411l2-1.778v-.001l5.671-5.04a3 3 0 0 1 3.986 0");
}
</style><g class="cuyn6tgcc"><path class="uq5r2pjip"/><path class="tm_4qmbuf"/></g>`,
		"fallback": "coolicons:house-alt-4-bulk",
	});
}

export default Component;
