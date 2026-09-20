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
		"content": `<style>.ayv26ub5y {
  d: path("M160 56H64a16 16 0 0 0-16 16v152a8 8 0 0 0 12.65 6.51L112 193.83l51.36 36.68A8 8 0 0 0 176 224V72a16 16 0 0 0-16-16");
}

.cuyn6tgcc {
  fill: currentColor;
}

.h38a4ib1g {
  d: path("M192 24H88a8 8 0 0 0 0 16h104v152a8 8 0 0 0 16 0V40a16 16 0 0 0-16-16");
}
</style><g class="cuyn6tgcc"><path class="ayv26ub5y"/><path class="h38a4ib1g"/></g>`,
		"fallback": "ph:bookmarks-simple-fill",
	});
}

export default Component;
