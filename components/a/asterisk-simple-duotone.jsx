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

.tyqb7cg5n {
  d: path("M200 128a72 72 0 1 1-72-72a72 72 0 0 1 72 72");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xxe00gm7e {
  d: path("m211 103.43l-70.13 28l49.47 63.61a8 8 0 1 1-12.63 9.82L128 141l-49.68 63.91a8 8 0 0 1-12.63-9.82l49.47-63.61L45 103.43a8 8 0 0 1 6-14.86l69 27.61V40a8 8 0 0 1 16 0v76.18l69-27.61a8 8 0 1 1 6 14.86");
}
</style><g class="cuyn6tgcc"><path class="tyqb7cg5n"/><path class="xxe00gm7e"/></g>`,
		"fallback": "ph:asterisk-simple-duotone",
	});
}

export default Component;
