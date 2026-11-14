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
		"content": `<style>.tf7x21bvc {
  fill: currentColor;
  d: path("M6.5 5.75h11v2.5h-11Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zpficg4xq {
  d: path("M4.5 19.5c0-3.25 3.25-5.5 7.5-5.5s7.5 2.25 7.5 5.5c0 .6-.4 1-1 1h-13c-.6 0-1-.4-1-1ZM8 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0Z");
}
</style><g class="ulnmmdpxh"><path class="zpficg4xq"/><path class="tf7x21bvc"/></g>`,
		"fallback": "uix-sharp:anonymize",
	});
}

export default Component;
