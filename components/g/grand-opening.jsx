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
		"content": `<style>.c4p5s66bp {
  d: path("M8 20.5v-6h4V17m2 2.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m2.25-1.25l4-4.5M19 19.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m.75-1.25l-4-4.5");
}

.sa7gzhbrk {
  d: path("M3 6.5L4.5 3h15L21 6.5m-18 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0M4.5 9v11.5h6.7m8.3-9.8V9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="sa7gzhbrk"/><path class="c4p5s66bp"/></g>`,
		"fallback": "uix-sharp:grand-opening",
	});
}

export default Component;
