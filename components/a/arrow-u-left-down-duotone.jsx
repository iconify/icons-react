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
		"content": `<style>.adqr5acqa {
  d: path("M144 24a64.07 64.07 0 0 0-64 64v80H40a8 8 0 0 0-5.66 13.66l48 48a8 8 0 0 0 11.32 0l48-48A8 8 0 0 0 136 168H96V88a48 48 0 0 1 96 0v88a8 8 0 0 0 16 0V88a64.07 64.07 0 0 0-64-64M88 212.69L59.31 184h57.38Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.sz7ii-xih {
  d: path("m136 176l-48 48l-48-48Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="sz7ii-xih"/><path class="adqr5acqa"/></g>`,
		"fallback": "ph:arrow-u-left-down-duotone",
	});
}

export default Component;
