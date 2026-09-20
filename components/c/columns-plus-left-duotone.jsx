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

.st3o-3hsn {
  d: path("M136 48v160a8 8 0 0 1-8 8h-24a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h24a8 8 0 0 1 8 8m64-8h-24a8 8 0 0 0-8 8v160a8 8 0 0 0 8 8h24a8 8 0 0 0 8-8V48a8 8 0 0 0-8-8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.vfj8pxyik {
  d: path("M128 32h-24a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176h-24V48h24Zm72-176h-24a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176h-24V48h24ZM72 128a8 8 0 0 1-8 8H48v16a8 8 0 0 1-16 0v-16H16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 8 8");
}
</style><g class="cuyn6tgcc"><path class="st3o-3hsn"/><path class="vfj8pxyik"/></g>`,
		"fallback": "ph:columns-plus-left-duotone",
	});
}

export default Component;
