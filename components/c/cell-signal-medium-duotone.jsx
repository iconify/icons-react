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
		"content": `<style>.azo1_fb6a {
  d: path("M120 100.7V208H32a8 8 0 0 1-5.66-13.66Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.cuyn6tgcc {
  fill: currentColor;
}

.ja9inubrw {
  d: path("M198.12 25.23a16 16 0 0 0-17.44 3.46l-160 160A16 16 0 0 0 32 216h160a16 16 0 0 0 16-16V40a15.94 15.94 0 0 0-9.88-14.77M112 120v80H32Zm80 80h-64v-96l64-64Z");
}
</style><g class="cuyn6tgcc"><path class="azo1_fb6a"/><path class="ja9inubrw"/></g>`,
		"fallback": "ph:cell-signal-medium-duotone",
	});
}

export default Component;
