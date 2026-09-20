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

.y_eppp-yq {
  d: path("M232 208a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V48a8 8 0 0 1 16 0v94.37L90.73 98a8 8 0 0 1 10.07-.38l58.81 44.11L218.73 90a8 8 0 1 1 10.54 12l-64 56a8 8 0 0 1-10.07.38l-58.81-44.09L40 163.63V200h184a8 8 0 0 1 8 8");
}
</style><g class="cuyn6tgcc"><path class="onrdkub8r"/><path class="y_eppp-yq"/></g>`,
		"fallback": "ph:chart-line-duotone",
	});
}

export default Component;
