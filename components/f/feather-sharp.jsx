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
		"content": `<style>.vnvzjibcs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M19.75 4.25c-6 0-11 4.25-11.25 11V17h1.75c6.75-.25 9.5-6.75 9.5-12.75ZM4 20L15 9m-2.5 2.5l3 1.25");
}
</style><path class="vnvzjibcs"/>`,
		"fallback": "iconoven:feather-sharp",
	});
}

export default Component;
