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

.f53ltzxqw {
  d: path("M200 112H56l72-72Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zwyy7pbae {
  d: path("m205.66 106.34l-72-72a8 8 0 0 0-11.32 0l-72 72A8 8 0 0 0 56 120h64v96a8 8 0 0 0 16 0v-96h64a8 8 0 0 0 5.66-13.66M75.31 104L128 51.31L180.69 104Z");
}
</style><g class="cuyn6tgcc"><path class="f53ltzxqw"/><path class="zwyy7pbae"/></g>`,
		"fallback": "ph:arrow-up-duotone",
	});
}

export default Component;
