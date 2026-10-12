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
		"content": `<style>.kx8nc-bve {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 12a9 9 0 0 1 18 0l-2.25-1.5L16.5 12l-2.25-1.5L12 12l-2.25-1.5L7.5 12l-2.25-1.5zm9 0v7.75m-8.5.75c2.83-1 5.67-1 8.5 0s5.67 1 8.5 0");
}
</style><path class="kx8nc-bve"/>`,
		"fallback": "iconoven:beach-umbrella-sharp",
	});
}

export default Component;
