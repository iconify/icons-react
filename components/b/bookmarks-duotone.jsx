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

.kn2_9zj9l {
  d: path("M192 24H96a16 16 0 0 0-16 16v16H64a16 16 0 0 0-16 16v152a8 8 0 0 0 12.65 6.51L112 193.83l51.36 36.68A8 8 0 0 0 176 224v-39.31l19.35 13.82A8 8 0 0 0 208 192V40a16 16 0 0 0-16-16m-32 184.46l-43.36-31a8 8 0 0 0-9.3 0L64 208.45V72h96Zm32-32L176 165V72a16 16 0 0 0-16-16H96V40h96Z");
}

.wub57dcmf {
  d: path("M200 40v152l-32-22.85V72a8 8 0 0 0-8-8H88V40a8 8 0 0 1 8-8h96a8 8 0 0 1 8 8");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="wub57dcmf"/><path class="kn2_9zj9l"/></g>`,
		"fallback": "ph:bookmarks-duotone",
	});
}

export default Component;
