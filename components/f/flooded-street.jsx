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
		"content": `<style>.qeo77ibru {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7 12.5l-4 9m14-9l4 9M2.5 4.5q2.25-1.5 4.75 0Q9.5 6 12 4.5q2.25-1.5 4.75 0Q19 6 21.5 4.5M2.5 9q2.25-1.5 4.75 0Q9.5 10.5 12 9q2.25-1.5 4.75 0Q19 10.5 21.5 9M12 13.5v2m0 3v3");
}
</style><path class="qeo77ibru"/>`,
		"fallback": "uix-sharp:flooded-street",
	});
}

export default Component;
