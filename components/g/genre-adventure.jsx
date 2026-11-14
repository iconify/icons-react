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
		"content": `<style>.gz20jt62h {
  d: path("M3.5 12a8.5 8.5 0 1 0 17 0a8.5 8.5 0 1 0-17 0Z");
}

.rmqs9ru6j {
  d: path("m15.889 8.111l-2.298 5.48l-5.48 2.298l2.298-5.48ZM12 2.5v1m0 17v1M2.5 12h1m17 0h1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gz20jt62h"/><path class="rmqs9ru6j"/></g>`,
		"fallback": "uix-sharp:genre-adventure",
	});
}

export default Component;
