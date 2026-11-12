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
		"content": `<style>.fupzn-bji {
  d: path("M3 6a2 2 0 1 0 4 0a2 2 0 0 0-4 0m0 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0M17 6a2 2 0 1 0 4 0a2 2 0 0 0-4 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r-nt66wjf {
  stroke-opacity: 0.4;
  d: path("M5 8v8M7 6h10m2 15v-8h-8m3-3l-3 3l3 3");
}
</style><g class="nrj6p8qat"><path class="r-nt66wjf"/><path class="fupzn-bji"/></g>`,
		"fallback": "coolicons:git-rebase-duocolor-sharp",
	});
}

export default Component;
