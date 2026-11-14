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
		"content": `<style>.b264oo60v {
  d: path("M2.5 10.5a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0Z");
}

.nyr13tbbr {
  d: path("M10 18h11l-1.25 1.75L21 21.5h-9m-5-11a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="b264oo60v"/><path class="nyr13tbbr"/></g>`,
		"fallback": "uix-sharp:duct-tape",
	});
}

export default Component;
