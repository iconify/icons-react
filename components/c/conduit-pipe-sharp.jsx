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
		"content": `<style>.k4-z77bxp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 9h12.5v6H2.75zM7 9v6m4-6v6m4.25-3h5V4.75");
}
</style><path class="k4-z77bxp"/>`,
		"fallback": "iconoven:conduit-pipe-sharp",
	});
}

export default Component;
