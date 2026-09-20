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
		"content": `<style>.dfcdzc65k {
  d: path("M3 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.kdmnrabtq {
  d: path("M17 19a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.o7mqvuj4j {
  d: path("M15 12.5V15h-2.5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.z5135gcut {
  d: path("m8 8 4 4");
}
</style><g class="s0phu2bbs"><path class="dfcdzc65k"/><path class="z5135gcut"/><path class="o7mqvuj4j"/><path class="kdmnrabtq"/></g>`,
		"fallback": "iconmind:end-to-end-outline-bold",
	});
}

export default Component;
