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
		"content": `<style>.gobhwybjh {
  d: path("m7.5 5.5l2.25 4L8 12l3.5 2.5l-1.5 4m4-5.5l2.5-2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z920k880h {
  d: path("M2.5 12a9.5 5 0 1 0 19 0a9.5 5 0 1 0-19 0Z");
}
</style><g class="ulnmmdpxh"><path class="z920k880h"/><path class="gobhwybjh"/></g>`,
		"fallback": "uix-sharp:frozen-pond",
	});
}

export default Component;
