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

.pcql76b8l {
  d: path("M192 56v96L96 56Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zfmt26pri {
  d: path("M224 216a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8M74.34 173.66a8 8 0 0 1 0-11.32L132.69 104L90.34 61.66A8 8 0 0 1 96 48h96a8 8 0 0 1 8 8v96a8 8 0 0 1-13.66 5.66L144 115.31l-58.34 58.35a8 8 0 0 1-11.32 0M115.31 64l34.35 34.34L184 132.69V64Z");
}
</style><g class="cuyn6tgcc"><path class="pcql76b8l"/><path class="zfmt26pri"/></g>`,
		"fallback": "ph:arrow-line-up-right-duotone",
	});
}

export default Component;
