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

.u86-ippmn {
  d: path("M216 152h-48v-48h48a8 8 0 0 0 0-16h-48V40a8 8 0 0 0-16 0v48h-48V40a8 8 0 0 0-16 0v48H40a8 8 0 0 0 0 16h48v48H40a8 8 0 0 0 0 16h48v48a8 8 0 0 0 16 0v-48h48v48a8 8 0 0 0 16 0v-48h48a8 8 0 0 0 0-16m-112 0v-48h48v48Z");
}

.zm5wl-1qw {
  d: path("M160 96v64H96V96Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="zm5wl-1qw"/><path class="u86-ippmn"/></g>`,
		"fallback": "ph:hash-straight-duotone",
	});
}

export default Component;
