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
		"content": `<style>.c98vkzb0q {
  d: path("M208 104V40a8 8 0 0 0-8-8H56a8 8 0 0 0-5.31 14L107 96H56a8 8 0 0 0-8 8v64a8 8 0 0 0 2.34 5.66l72 72A8 8 0 0 0 136 240v-64h64a8 8 0 0 0 5.31-14L149 112h51a8 8 0 0 0 8-8m-29 56h-51a8 8 0 0 0-8 8v52.69l-56-56V112h61Zm13-64h-61L77 48h115Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.vvhjf2bav {
  d: path("M200 104h-72L56 40h144ZM56 168l72 72v-72h72l-72-64H56Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="vvhjf2bav"/><path class="c98vkzb0q"/></g>`,
		"fallback": "ph:framer-logo-duotone",
	});
}

export default Component;
