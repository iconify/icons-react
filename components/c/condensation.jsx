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
		"content": `<style>.d7g23dbma {
  d: path("M6.455 3h11.09a1.75 1.75 0 0 1 1.739 1.943l-1.611 14.5A1.75 1.75 0 0 1 15.934 21H8.066a1.75 1.75 0 0 1-1.739-1.557l-1.611-14.5A1.75 1.75 0 0 1 6.455 3");
}

.f2hsu34uf {
  d: path("M10 7.5s-1.5 2-1.5 3a1.5 1.5 0 0 0 3 0c0-1-1.5-3-1.5-3m4 5.5s-1.5 2-1.5 3a1.5 1.5 0 0 0 3 0c0-1-1.5-3-1.5-3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="d7g23dbma"/><path class="f2hsu34uf"/></g>`,
		"fallback": "uix:condensation",
	});
}

export default Component;
