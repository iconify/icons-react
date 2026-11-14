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
		"content": `<style>.eqmz3qbnr {
  d: path("m10.25 6.5l-3 6h3.5l-3 5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zf9u12bqf {
  d: path("M4 3h10v18.5H4Zm10 4h3a2 2 0 0 1 2 2v7m-1.5 0h3v3.5h-3Z");
}
</style><g class="ulnmmdpxh"><path class="zf9u12bqf"/><path class="eqmz3qbnr"/></g>`,
		"fallback": "uix-sharp:charger-kwh-delivered",
	});
}

export default Component;
