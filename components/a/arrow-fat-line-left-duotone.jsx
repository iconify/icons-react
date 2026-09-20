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

.n8lvvzixm {
  d: path("M184 80v96h-64v48l-96-96l96-96v48Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.x194u0bty {
  d: path("M184 72h-56V32a8 8 0 0 0-13.66-5.66l-96 96a8 8 0 0 0 0 11.32l96 96A8 8 0 0 0 128 224v-40h56a8 8 0 0 0 8-8V80a8 8 0 0 0-8-8m-8 96h-56a8 8 0 0 0-8 8v28.69L35.31 128L112 51.31V80a8 8 0 0 0 8 8h56Zm48-88v96a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0");
}
</style><g class="cuyn6tgcc"><path class="n8lvvzixm"/><path class="x194u0bty"/></g>`,
		"fallback": "ph:arrow-fat-line-left-duotone",
	});
}

export default Component;
