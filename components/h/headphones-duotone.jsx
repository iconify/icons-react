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

.i9ovbdbpk {
  d: path("M80 144v40a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16v-56h32a16 16 0 0 1 16 16m112-16a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16v-56Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.p5-tc56tu {
  d: path("M201.89 54.66A104.08 104.08 0 0 0 24 128v56a24 24 0 0 0 24 24h16a24 24 0 0 0 24-24v-40a24 24 0 0 0-24-24H40.36A88 88 0 0 1 128 40h.67a87.71 87.71 0 0 1 87 80H192a24 24 0 0 0-24 24v40a24 24 0 0 0 24 24h16a24 24 0 0 0 24-24v-56a103.4 103.4 0 0 0-30.11-73.34M64 136a8 8 0 0 1 8 8v40a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8v-48Zm152 48a8 8 0 0 1-8 8h-16a8 8 0 0 1-8-8v-40a8 8 0 0 1 8-8h24Z");
}
</style><g class="cuyn6tgcc"><path class="i9ovbdbpk"/><path class="p5-tc56tu"/></g>`,
		"fallback": "ph:headphones-duotone",
	});
}

export default Component;
