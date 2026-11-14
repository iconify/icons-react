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
		"content": `<style>.chcnyrbhq {
  d: path("m6 14l3.5-5h5L12 14Zm8.5-5l3.5 5m-3.5-5V5H17a1.25 1.25 0 0 1 0 2.5m-14.5 13h6l1.5-1l1.5 1h10");
}

.n-iiicbql {
  d: path("M2.5 14a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm12 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n-iiicbql"/><path class="chcnyrbhq"/></g>`,
		"fallback": "uix-sharp:gravel-bike",
	});
}

export default Component;
