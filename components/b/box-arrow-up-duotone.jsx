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

.f8v0ztb7q {
  d: path("m223.16 68.42l-16-32A8 8 0 0 0 200 32H56a8 8 0 0 0-7.16 4.42l-16 32A8.1 8.1 0 0 0 32 72v136a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V72a8.1 8.1 0 0 0-.84-3.58M60.94 48h134.12l8 16H52.94ZM208 208H48V80h160zm-42.34-77.66a8 8 0 0 1-11.32 11.32L136 123.31V184a8 8 0 0 1-16 0v-60.69l-18.34 18.35a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0Z");
}

.q0bupis9x {
  d: path("M216 72v136a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V72Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="q0bupis9x"/><path class="f8v0ztb7q"/></g>`,
		"fallback": "ph:box-arrow-up-duotone",
	});
}

export default Component;
