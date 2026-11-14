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
		"content": `<style>.lhiuf2b2u {
  d: path("M10.523 15.371L9 16.25L2.5 12.5V5.75L9 2l6.5 3.75v4.696");
}

.ms16lcc1m {
  d: path("M2.5 5.75L9 9.5l6.5-3.75M9 9.5v6.75M5.75 3.75l6.5 3.75m.75 10a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Zm2.25 0h4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lhiuf2b2u"/><path class="ms16lcc1m"/></g>`,
		"fallback": "uix-sharp:delivery-restricted",
	});
}

export default Component;
