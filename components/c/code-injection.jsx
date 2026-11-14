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
		"content": `<style>.fvyefv1jd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7 12l-4 3.75l4 3.75M17 12l4 3.75l-4 3.75m-7-15h4v7h-4Zm-.5-2h5m-2.5 0v2m0 7V16");
}
</style><path class="fvyefv1jd"/>`,
		"fallback": "uix-sharp:code-injection",
	});
}

export default Component;
