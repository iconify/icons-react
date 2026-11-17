import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.jps9vkgsi {
  stroke-opacity: 0.4;
  d: path("m13 8l-3 4h4l-3 4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.uofpiedgv {
  d: path("M12 3h6a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z");
}
</style><g class="nrj6p8qat"><path class="jps9vkgsi"/><path class="uofpiedgv"/></g>`,
		"fallback": "coolicons:fuse-duocolor-round",
	});
}

export default Component;
