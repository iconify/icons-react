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
		"content": `<style>.huex3xb7c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 10.25A2.25 2.25 0 0 1 6.25 6a5.75 3.25 0 0 1 11.5 0a2.25 2.25 0 0 1 1.5 4.25Zm.25 2.5h14l-1.5 7.5l-.208 1.021l-1.042-.021h-8.5l-1.042.021L6.5 20.25Zm4.5 2.5l.25 3.5m4.75-3.5l-.25 3.5");
}
</style><path class="huex3xb7c"/>`,
		"fallback": "iconoven:cupcake-sharp",
	});
}

export default Component;
