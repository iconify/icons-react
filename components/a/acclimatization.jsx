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
		"content": `<style>.g8nj9l4ua {
  d: path("m13.5 19.5l-6-3.5l4-3.5l-2-3");
}

.s6uliyj6q {
  d: path("M2.5 19.5L9.5 5l4.5 7.5L16.5 9l5 10.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="s6uliyj6q"/><path class="g8nj9l4ua"/></g>`,
		"fallback": "uix-sharp:acclimatization",
	});
}

export default Component;
