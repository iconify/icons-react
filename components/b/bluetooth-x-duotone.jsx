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

.f6u96mo3d {
  d: path("m176 176l-64 48v-96Zm-8.53-102.4L112 32v96l55.47-41.6a8 8 0 0 0 0-12.8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.j3--websu {
  d: path("M180.8 169.6L125.33 128l23.47-17.6a8 8 0 0 0-9.6-12.8L120 112V48l19.2 14.4a8 8 0 1 0 9.6-12.8l-32-24A8 8 0 0 0 104 32v80L52.8 73.6a8 8 0 0 0-9.6 12.8L98.67 128L43.2 169.6a8 8 0 1 0 9.6 12.8L104 144v80a8 8 0 0 0 12.8 6.4l64-48a8 8 0 0 0 0-12.8M120 208v-64l42.67 32ZM237.66 98.34a8 8 0 0 1-11.32 11.32L208 91.31l-18.34 18.35a8 8 0 0 1-11.32-11.32L196.69 80l-18.35-18.34a8 8 0 0 1 11.32-11.32L208 68.69l18.34-18.35a8 8 0 0 1 11.32 11.32L219.31 80Z");
}
</style><g class="cuyn6tgcc"><path class="f6u96mo3d"/><path class="j3--websu"/></g>`,
		"fallback": "ph:bluetooth-x-duotone",
	});
}

export default Component;
