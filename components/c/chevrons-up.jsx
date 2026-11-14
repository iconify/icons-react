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
		"content": `<style>.lf38v1hhr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 11.5L12 6l5.5 5.5m-11 6L12 12l5.5 5.5");
}
</style><path class="lf38v1hhr"/>`,
		"fallback": "uix-sharp:chevrons-up",
	});
}

export default Component;
