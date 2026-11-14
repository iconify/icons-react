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
		"content": `<style>.z9cd2vbht {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 3v5.25a6.5 6.5 0 1 0 3 0V3m0 2.5l8.5 5m-4.25-5.75L19 6.5");
}
</style><path class="z9cd2vbht"/>`,
		"fallback": "uix-sharp:distillation-flask",
	});
}

export default Component;
