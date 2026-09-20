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
		"content": `<style>.bf62rxbaa {
  d: path("m136 128l-80 80V48Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.cuyn6tgcc {
  fill: currentColor;
}

.x67bzz2ts {
  d: path("m141.66 122.34l-80-80A8 8 0 0 0 48 48v160a8 8 0 0 0 13.66 5.66l80-80a8 8 0 0 0 0-11.32M64 188.69V67.31L124.69 128Zm157.66-55l-80 80a8 8 0 0 1-11.32-11.32L204.69 128l-74.35-74.34a8 8 0 0 1 11.32-11.32l80 80a8 8 0 0 1 0 11.32Z");
}
</style><g class="cuyn6tgcc"><path class="bf62rxbaa"/><path class="x67bzz2ts"/></g>`,
		"fallback": "ph:caret-double-right-duotone",
	});
}

export default Component;
