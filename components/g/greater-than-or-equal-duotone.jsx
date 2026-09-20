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
		"content": `<style>.azttkhd5p {
  d: path("M53.24 152.49L184.86 104L53.24 55.51a8 8 0 1 1 5.53-15l152 56a8 8 0 0 1 0 15l-152 56A8.1 8.1 0 0 1 56 168a8 8 0 0 1-2.76-15.51M208 192H56a8 8 0 0 0 0 16h152a8 8 0 0 0 0-16");
}

.cuyn6tgcc {
  fill: currentColor;
}

.qryme2b9c {
  d: path("M208 104L56 160V48Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="qryme2b9c"/><path class="azttkhd5p"/></g>`,
		"fallback": "ph:greater-than-or-equal-duotone",
	});
}

export default Component;
