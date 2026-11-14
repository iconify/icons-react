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
		"content": `<style>.m_ifx8bbu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.344 20.5H3.5v-10L12 3.25l8.5 7.25v.856M19 13.75L15.75 18h3.5l-2.75 3.75m-2-7.75l7.25 7.25");
}
</style><path class="m_ifx8bbu"/>`,
		"fallback": "uix-sharp:blackout-house",
	});
}

export default Component;
