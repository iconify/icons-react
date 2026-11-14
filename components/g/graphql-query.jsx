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
		"content": `<style>.claz6zbjh {
  d: path("M8.5 7c-1.25 0-1.25.5-1.25 1.5v.75c0 .75-.5 1.25-1.25 1.25c.75 0 1.25.5 1.25 1.25v.75c0 1 0 1.5 1.25 1.5m4-7c1.25 0 1.25.5 1.25 1.5v.75c0 .75.5 1.25 1.25 1.25c-.75 0-1.25.5-1.25 1.25v.75c0 1 0 1.5-1.25 1.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w7v1zgbmc {
  d: path("M3 10.5a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0Zm12.75 5.25L21 21");
}
</style><g class="ulnmmdpxh"><path class="w7v1zgbmc"/><path class="claz6zbjh"/></g>`,
		"fallback": "uix-sharp:graphql-query",
	});
}

export default Component;
