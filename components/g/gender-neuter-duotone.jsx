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

.ju460ur2z {
  d: path("M208 104a80 80 0 1 0-88 79.6V232a8 8 0 0 0 16 0v-48.4a80.11 80.11 0 0 0 72-79.6m-80 64a64 64 0 1 1 64-64a64.07 64.07 0 0 1-64 64");
}

.kbwg822lr {
  d: path("M200 104a72 72 0 1 1-72-72a72 72 0 0 1 72 72");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="kbwg822lr"/><path class="ju460ur2z"/></g>`,
		"fallback": "ph:gender-neuter-duotone",
	});
}

export default Component;
