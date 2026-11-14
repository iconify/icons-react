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
		"content": `<style>.d2cy25bjl {
  d: path("M12 21.25v-7.5l-2-2.25v-3a2 2 0 0 1 4 0v3l-2 2.25");
}

.npvpqvb-s {
  d: path("M12 2.5C9 4 7 7 7.5 10.5C5.5 11 4.5 13 4 15l-1 5q9 2.5 18 0l-1-5c-.5-2-1.5-4-3.5-4.5C17 7 15 4 12 2.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="npvpqvb-s"/><path class="d2cy25bjl"/></g>`,
		"fallback": "uix-sharp:cloak-hooded",
	});
}

export default Component;
