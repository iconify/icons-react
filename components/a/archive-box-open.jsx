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
		"content": `<style>.wje33_qqb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 11.5v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7M2.789 5.093l17.727-3.125l.695 3.939L3.484 9.032ZM4 11.5h16M10 15h4");
}
</style><path class="wje33_qqb"/>`,
		"fallback": "uix-sharp:archive-box-open",
	});
}

export default Component;
