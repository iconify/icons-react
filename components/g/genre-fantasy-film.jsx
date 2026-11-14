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
		"content": `<style>.df4gofoar {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m16 3.25l1.25 3l3.25.25L18 8.75l.75 3L16 10l-2.75 1.75l.75-3l-2.5-2.25l3.25-.25ZM3.5 20.5l7-7");
}
</style><path class="df4gofoar"/>`,
		"fallback": "uix-sharp:genre-fantasy-film",
	});
}

export default Component;
