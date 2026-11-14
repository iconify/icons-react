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
		"content": `<style>.gidk5yhln {
  d: path("M2.5 3h19v18h-19Zm10 0v18");
}

.q4xi8nbxq {
  d: path("M15 9.5a2 2 0 1 1 3.25 1.5c-.75.5-1.25 1-1.25 1.75v1M17 17h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gidk5yhln"/><path class="q4xi8nbxq"/></g>`,
		"fallback": "uix-sharp:help-panel",
	});
}

export default Component;
