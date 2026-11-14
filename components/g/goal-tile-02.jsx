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
		"content": `<style>.g6ulkabjn {
  d: path("M2.5 2.5h19v19h-19Z");
}

.k61oq3b-w {
  d: path("M2.5 18C6 18 8 13.5 12 13.5s6 4.5 9.5 4.5M12 13.5v-8m0 0l6 2.75L12 11Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="g6ulkabjn"/><path class="k61oq3b-w"/></g>`,
		"fallback": "uix-sharp:goal-tile-02",
	});
}

export default Component;
