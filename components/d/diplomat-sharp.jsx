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
		"content": `<style>.b6g-vuagr {
  d: path("M2.75 21.25a5.5 6.5 0 0 1 11 0Z");
}

.ffm-t-bdz {
  d: path("M13.75 7.5h7.5M17.5 3.75L16.15 7.5l1.35 3.75");
}

.n5rez8zhl {
  cx: 17.5px;
  cy: 7.5px;
  r: 3.75px;
}

.nj5qkke2z {
  cx: 8.25px;
  cy: 8.25px;
  r: 3px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="nj5qkke2z"/><path class="b6g-vuagr"/><circle class="n5rez8zhl"/><path class="ffm-t-bdz"/></g>`,
		"fallback": "iconoven:diplomat-sharp",
	});
}

export default Component;
