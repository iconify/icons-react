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

.onrdkub8r {
  d: path("M224 64v144H32V48h176a16 16 0 0 1 16 16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.vr94xfo8d {
  d: path("M232 208a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V48a8 8 0 0 1 16 0v108.69l50.34-50.35a8 8 0 0 1 11.32 0L128 132.69L180.69 80H160a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8v40a8 8 0 0 1-16 0V91.31l-58.34 58.35a8 8 0 0 1-11.32 0L96 123.31l-56 56V200h184a8 8 0 0 1 8 8");
}
</style><g class="cuyn6tgcc"><path class="onrdkub8r"/><path class="vr94xfo8d"/></g>`,
		"fallback": "ph:chart-line-up-duotone",
	});
}

export default Component;
