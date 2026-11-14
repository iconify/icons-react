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
		"content": `<style>.la_o2lbvz {
  d: path("m15.5 10.25l1.117 2.713l2.925.224l-2.235 1.9l.691 2.851L15.5 16.4l-2.498 1.538l.691-2.851l-2.235-1.9l2.925-.224Z");
}

.o8-x7tb3j {
  d: path("M9.75 7h11.5v14.5H9.75Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xt0q3gb5x {
  d: path("M9.75 20.5L6 21.5L2.25 7l10.5-2.75L13.5 7");
}
</style><g class="ulnmmdpxh"><path class="xt0q3gb5x"/><path class="o8-x7tb3j"/><path class="la_o2lbvz"/></g>`,
		"fallback": "uix-sharp:category-collectibles",
	});
}

export default Component;
