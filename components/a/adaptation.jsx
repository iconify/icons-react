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
		"content": `<style>.c4unwbcyb {
  d: path("M3.5 12a8.5 8.5 0 0 1 16-4");
}

.ozc7y4bbr {
  d: path("M3.75 18.75L4.5 16l2.75.75M10 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vzhchmbsi {
  d: path("M20.25 5.25L19.5 8l-2.75-.75M20.5 12a8.5 8.5 0 0 1-16 4");
}
</style><g class="ulnmmdpxh"><path class="c4unwbcyb"/><path class="vzhchmbsi"/><path class="ozc7y4bbr"/></g>`,
		"fallback": "uix-sharp:adaptation",
	});
}

export default Component;
