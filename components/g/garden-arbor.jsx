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
		"content": `<style>.fsaclzbqn {
  d: path("M6 20.5V10a6 6 0 0 1 12 0v10.5M3.5 7h17m-18 13.5h19M6 17c-2.5 0-3.5-1.5-3.5-3.5C5 13.5 6 15 6 17Z");
}

.u5saiab7u {
  d: path("M6 13.5c2.5 0 3.5-1.5 3.5-3.5C7 10 6 11.5 6 13.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fsaclzbqn"/><path class="u5saiab7u"/></g>`,
		"fallback": "uix-sharp:garden-arbor",
	});
}

export default Component;
