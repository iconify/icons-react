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

.n8-yyacxu {
  d: path("M148 152a60 60 0 0 0 0-120H88a8 8 0 0 0-8 8v96H56a8 8 0 0 0 0 16h24v16H56a8 8 0 0 0 0 16h24v32a8 8 0 0 0 16 0v-32h48a8 8 0 0 0 0-16H96v-16ZM96 48h52a44 44 0 0 1 0 88H96Z");
}

.q4pehrbyr {
  d: path("M200 92a52 52 0 0 1-52 52H88V40h60a52 52 0 0 1 52 52");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="q4pehrbyr"/><path class="n8-yyacxu"/></g>`,
		"fallback": "ph:currency-rub-duotone",
	});
}

export default Component;
