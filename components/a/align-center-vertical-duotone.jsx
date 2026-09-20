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

.qqe3l0bmi {
  d: path("M224 120h-16V72a16 16 0 0 0-16-16h-40a16 16 0 0 0-16 16v48h-16V48a16 16 0 0 0-16-16H64a16 16 0 0 0-16 16v72H32a8 8 0 0 0 0 16h16v72a16 16 0 0 0 16 16h40a16 16 0 0 0 16-16v-72h16v48a16 16 0 0 0 16 16h40a16 16 0 0 0 16-16v-48h16a8 8 0 0 0 0-16m-120 88H64V48h40Zm88-24h-40V72h40Z");
}

.xxhf_hx9z {
  d: path("M200 72v112a8 8 0 0 1-8 8h-40a8 8 0 0 1-8-8V72a8 8 0 0 1 8-8h40a8 8 0 0 1 8 8m-96-32H64a8 8 0 0 0-8 8v160a8 8 0 0 0 8 8h40a8 8 0 0 0 8-8V48a8 8 0 0 0-8-8");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="xxhf_hx9z"/><path class="qqe3l0bmi"/></g>`,
		"fallback": "ph:align-center-vertical-duotone",
	});
}

export default Component;
