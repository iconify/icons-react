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
		"content": `<style>.ka36tcczw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 6.5v2c0 1.25-2.5 2-2.5 4.5v5.5a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V13c0-2.5-2.5-3.25-2.5-4.5v-2l-1.5 1Zm7 2.25l3.75-3.5l3-1l-1 3l-3.5 3.75Z");
}
</style><path class="ka36tcczw"/>`,
		"fallback": "uix-sharp:ampoule-break",
	});
}

export default Component;
