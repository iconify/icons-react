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

.dnq8z02sa {
  d: path("M117.66 50.34A8 8 0 0 0 104 56v64H32a8 8 0 0 0 0 16h72v64a8 8 0 0 0 13.66 5.66l72-72a8 8 0 0 0 0-11.32ZM120 180.69V75.31L172.69 128ZM224 40v176a8 8 0 0 1-16 0V40a8 8 0 0 1 16 0");
}

.fal8w6bqh {
  d: path("m184 128l-72 72V56Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="fal8w6bqh"/><path class="dnq8z02sa"/></g>`,
		"fallback": "ph:arrow-line-right-duotone",
	});
}

export default Component;
