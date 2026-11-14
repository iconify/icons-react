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
		"content": `<style>.eirtzqbmh {
  d: path("M10 15.75V11h4v3.25");
}

.g21a8hbaa {
  d: path("M2.5 15q2.25-1.5 4.75 0T12 15t4.75 0t4.75 0m-19 4q2.25-1.5 4.75 0T12 19t4.75 0t4.75 0");
}

.iaonqbthp {
  d: path("M4 14.25V9.5L12 3l8 6.5v6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="iaonqbthp"/><path class="eirtzqbmh"/><path class="g21a8hbaa"/></g>`,
		"fallback": "uix-sharp:flood-warning",
	});
}

export default Component;
