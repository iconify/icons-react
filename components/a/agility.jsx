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
		"content": `<style>.g5vumqbqx {
  d: path("M15.5 6.5H20V11M2.5 6.5H6m-3.5 4h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v2qaygb1r {
  d: path("m4 17.5l6-8l3 4l7-7");
}
</style><g class="ulnmmdpxh"><path class="v2qaygb1r"/><path class="g5vumqbqx"/></g>`,
		"fallback": "uix-sharp:agility",
	});
}

export default Component;
