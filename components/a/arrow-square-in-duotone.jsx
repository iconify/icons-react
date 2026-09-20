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

.hqszybbyz {
  d: path("M216 48v128a8 8 0 0 1-8 8H80a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h128a8 8 0 0 1 8 8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.via_6_sjn {
  d: path("M128 136v64a8 8 0 0 1-16 0v-44.68l-66.34 66.34a8 8 0 0 1-11.32-11.32L100.68 144H56a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8m80-104H80a16 16 0 0 0-16 16v48a8 8 0 0 0 16 0V48h128v128h-48a8 8 0 0 0 0 16h48a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16");
}
</style><g class="cuyn6tgcc"><path class="hqszybbyz"/><path class="via_6_sjn"/></g>`,
		"fallback": "ph:arrow-square-in-duotone",
	});
}

export default Component;
