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
		"content": `<style>.add51x2-p {
  d: path("M14 16.5c2.5.5 4 2.25 4.5 4.75");
}

.eyt-eibvu {
  d: path("m2.581 18.945l6.364-6.364l2.474 2.474l-6.364 6.364Zm7.669-5.195L19 5c.75-.75 2-.25 1.75 1M13.5 18a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="eyt-eibvu"/><path class="add51x2-p"/></g>`,
		"fallback": "uix-sharp:crochet-hook",
	});
}

export default Component;
