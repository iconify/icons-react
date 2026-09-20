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

.nlsrpxbnn {
  d: path("M232 56v40a8 8 0 0 1-8 8h-40L88 208H32a8 8 0 0 1-8-8v-40a8 8 0 0 1 8-8h40l96-104h56a8 8 0 0 1 8 8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ydo8g0iis {
  d: path("M224 40h-56a8 8 0 0 0-5.88 2.57L68.5 144H32a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h56a8 8 0 0 0 5.88-2.57L187.5 112H224a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 56h-40a8 8 0 0 0-5.88 2.57L84.5 200H32v-40h40a8 8 0 0 0 5.88-2.57L171.5 56H224Zm5.66 74.34a8 8 0 0 1-11.32 11.32L208 171.31V208a8 8 0 0 1-16 0v-36.69l-10.34 10.35a8 8 0 0 1-11.32-11.32l24-24a8 8 0 0 1 11.32 0Z");
}
</style><g class="cuyn6tgcc"><path class="nlsrpxbnn"/><path class="ydo8g0iis"/></g>`,
		"fallback": "ph:escalator-up-duotone",
	});
}

export default Component;
