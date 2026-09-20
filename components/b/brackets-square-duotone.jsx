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
		"content": `<style>.bg35r-f3d {
  d: path("M216 40v176H40V40Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.cuyn6tgcc {
  fill: currentColor;
}

.hx4l2nb6h {
  d: path("M48 48v160h32a8 8 0 0 1 0 16H40a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h40a8 8 0 0 1 0 16Zm168-16h-40a8 8 0 0 0 0 16h32v160h-32a8 8 0 0 0 0 16h40a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8");
}
</style><g class="cuyn6tgcc"><path class="bg35r-f3d"/><path class="hx4l2nb6h"/></g>`,
		"fallback": "ph:brackets-square-duotone",
	});
}

export default Component;
