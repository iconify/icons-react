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
		"content": `<style>.y4dfvvbeq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 2.75h11.5v5H4Zm-1 5h13.75v5H3Zm9.85 10.75H2.5v-5.75h17v.7m-1 8.05l-2.75-2.75a2 2 0 0 1 2.75-2.25a2 2 0 0 1 2.75 2.25Z");
}
</style><path class="y4dfvvbeq"/>`,
		"fallback": "uix-sharp:book-stack-heart",
	});
}

export default Component;
