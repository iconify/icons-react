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
		"content": `<style>.mlmpsevin {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 21.5C9 15 7 8 10.5 2.5m7.5 19c.5-6.5-6-12.5-4.5-19");
}
</style><path class="mlmpsevin"/>`,
		"fallback": "uix-sharp:cross-country-trail",
	});
}

export default Component;
