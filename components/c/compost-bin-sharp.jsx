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
		"content": `<style>.m7jkanb6w {
  d: path("M6.25 8.25h13l-.14 1.49l-.97 10.02l-.14 1.49H6l-.14-1.49l-.97-10.02l-.14-1.49zm-3.5-2.5h18.5m-11.5 0v-2.5h4.5v2.5");
}

.x-h46o_jk {
  d: path("M9 18.25c.25-3.5 2-5.5 6-6.25c-.25 3.5-2 5.5-6 6.25Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="m7jkanb6w"/><path class="x-h46o_jk"/></g>`,
		"fallback": "iconoven:compost-bin-sharp",
	});
}

export default Component;
