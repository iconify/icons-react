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

.j8d929y8z {
  d: path("M216 80v104a24 24 0 0 1-24 24H64a24 24 0 0 1-24-24V80Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ocxgd0zse {
  d: path("M88 48V16a8 8 0 0 1 16 0v32a8 8 0 0 1-16 0m40 8a8 8 0 0 0 8-8V16a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m32 0a8 8 0 0 0 8-8V16a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m92.8 46.4L224 124v60a32 32 0 0 1-32 32H64a32 32 0 0 1-32-32v-60L3.2 102.4a8 8 0 0 1 9.6-12.8L32 104V80a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8v24l19.2-14.4a8 8 0 0 1 9.6 12.8M208 88H48v96a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16Z");
}
</style><g class="cuyn6tgcc"><path class="j8d929y8z"/><path class="ocxgd0zse"/></g>`,
		"fallback": "ph:cooking-pot-duotone",
	});
}

export default Component;
