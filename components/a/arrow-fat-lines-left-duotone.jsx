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

.dh0ckkdxl {
  d: path("M152 72h-24V32a8 8 0 0 0-13.66-5.66l-96 96a8 8 0 0 0 0 11.32l96 96A8 8 0 0 0 128 224v-40h24a8 8 0 0 0 8-8V80a8 8 0 0 0-8-8m-8 96h-24a8 8 0 0 0-8 8v28.69L35.31 128L112 51.31V80a8 8 0 0 0 8 8h24Zm80-88v96a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0m-32 0v96a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0");
}

.uy_60y2dq {
  d: path("M152 80v96h-32v48l-96-96l96-96v48Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="uy_60y2dq"/><path class="dh0ckkdxl"/></g>`,
		"fallback": "ph:arrow-fat-lines-left-duotone",
	});
}

export default Component;
