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
		"content": `<style>.afs0phhgq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 2.5h6.5L19.5 8l-3.75 13.5h-7.5L4.5 8Zm3.25 4V16M9 9.5h6");
}
</style><path class="afs0phhgq"/>`,
		"fallback": "uix-sharp:coffin",
	});
}

export default Component;
