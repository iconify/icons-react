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

.dwv3k6k1f {
  d: path("M152 128a24 24 0 1 1-24-24a24 24 0 0 1 24 24M48 104a24 24 0 1 0 24 24a24 24 0 0 0-24-24m160 0a24 24 0 1 0 24 24a24 24 0 0 0-24-24");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.iiofdgb3z {
  d: path("M128 96a32 32 0 1 0 32 32a32 32 0 0 0-32-32m0 48a16 16 0 1 1 16-16a16 16 0 0 1-16 16M48 96a32 32 0 1 0 32 32a32 32 0 0 0-32-32m0 48a16 16 0 1 1 16-16a16 16 0 0 1-16 16m160-48a32 32 0 1 0 32 32a32 32 0 0 0-32-32m0 48a16 16 0 1 1 16-16a16 16 0 0 1-16 16");
}
</style><g class="cuyn6tgcc"><path class="dwv3k6k1f"/><path class="iiofdgb3z"/></g>`,
		"fallback": "ph:dots-three-outline-duotone",
	});
}

export default Component;
