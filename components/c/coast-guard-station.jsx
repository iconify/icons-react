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
		"content": `<style>.q42uwdure {
  d: path("M6.25 6.5h3v3h-3Zm9.5 9.5q1.5-1.25 3 0t2.75 0m-5.75 4q1.5-1.25 3 0t2.75 0");
}

.q9n5n0b5z {
  d: path("M2.5 20.5v-8h2V4.75L7.75 2.5L11 4.75v7.75h2v8Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="q9n5n0b5z"/><path class="q42uwdure"/></g>`,
		"fallback": "uix-sharp:coast-guard-station",
	});
}

export default Component;
