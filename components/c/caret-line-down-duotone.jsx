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

.hp4yyybmk {
  d: path("m208 72l-80 80l-80-80Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.k7-ui8bdn {
  d: path("M122.34 157.66a8 8 0 0 0 11.32 0l80-80A8 8 0 0 0 208 64H48a8 8 0 0 0-5.66 13.66ZM188.69 80L128 140.69L67.31 80ZM216 192a8 8 0 0 1-8 8H48a8 8 0 0 1 0-16h160a8 8 0 0 1 8 8");
}
</style><g class="cuyn6tgcc"><path class="hp4yyybmk"/><path class="k7-ui8bdn"/></g>`,
		"fallback": "ph:caret-line-down-duotone",
	});
}

export default Component;
