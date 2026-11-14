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
		"content": `<style>.kj9qsjfpu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7H19v10H2.5Zm19 3.5v3m-10.75-4v5M8.25 12h5");
}
</style><path class="kj9qsjfpu"/>`,
		"fallback": "uix-sharp:battery-plus",
	});
}

export default Component;
