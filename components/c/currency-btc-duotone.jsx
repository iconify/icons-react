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

.hyuq_wbjz {
  d: path("M200 160a40 40 0 0 1-40 40H88V48h60a36 36 0 0 1 0 72h12a40 40 0 0 1 40 40");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.kqmrsln9v {
  d: path("M178.48 115.7A44 44 0 0 0 152 40.19V24a8 8 0 0 0-16 0v16h-16V24a8 8 0 0 0-16 0v16H72a8 8 0 0 0 0 16h8v136h-8a8 8 0 0 0 0 16h32v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h8a48 48 0 0 0 18.48-92.3M96 56h52a28 28 0 0 1 0 56H96Zm64 136H96v-64h64a32 32 0 0 1 0 64");
}
</style><g class="cuyn6tgcc"><path class="hyuq_wbjz"/><path class="kqmrsln9v"/></g>`,
		"fallback": "ph:currency-btc-duotone",
	});
}

export default Component;
