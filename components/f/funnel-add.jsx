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
		"content": `<style>.u13nikk7d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16.219 7.539L11.5 13.5v6l-4.25 2v-8l-4.75-6h10.9M19 2v5.5m-2.75-2.75h5.5");
}
</style><path class="u13nikk7d"/>`,
		"fallback": "uix-sharp:funnel-add",
	});
}

export default Component;
