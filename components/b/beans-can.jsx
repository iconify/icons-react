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
		"content": `<style>.jmwhm7bqg {
  d: path("M9.5 13.5c-1-2 1-3.75 3-3c1 .4 2-.25 2.5.5c.75 1.5-1 4-3.25 4c-1 0-1.85-.7-2.25-1.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vq7gpsb7h {
  d: path("M5.5 5.5v13a6.5 2 0 0 0 13 0v-13");
}

.yi42g8s9l {
  d: path("M5.5 5.5a6.5 2 0 1 0 13 0a6.5 2 0 1 0-13 0Z");
}
</style><g class="ulnmmdpxh"><path class="yi42g8s9l"/><path class="vq7gpsb7h"/><path class="jmwhm7bqg"/></g>`,
		"fallback": "uix-sharp:beans-can",
	});
}

export default Component;
