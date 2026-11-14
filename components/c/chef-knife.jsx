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
		"content": `<style>.ec7myjd1a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8.75 12.5l9.5-9.5c1 4.5.5 8-2.5 11L13 16.75Zm.987 1.141l2.122 2.122l-4.596 4.596l-2.122-2.122Z");
}
</style><path class="ec7myjd1a"/>`,
		"fallback": "uix-sharp:chef-knife",
	});
}

export default Component;
