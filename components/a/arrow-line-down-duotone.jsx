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
		"content": `<style>.b-j0neche {
  d: path("m200 112l-72 72l-72-72Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.cuyn6tgcc {
  fill: currentColor;
}

.ph-v66btv {
  d: path("M122.34 189.66a8 8 0 0 0 11.32 0l72-72A8 8 0 0 0 200 104h-64V32a8 8 0 0 0-16 0v72H56a8 8 0 0 0-5.66 13.66ZM180.69 120L128 172.69L75.31 120ZM224 216a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8");
}
</style><g class="cuyn6tgcc"><path class="b-j0neche"/><path class="ph-v66btv"/></g>`,
		"fallback": "ph:arrow-line-down-duotone",
	});
}

export default Component;
