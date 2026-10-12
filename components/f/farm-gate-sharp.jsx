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
		"content": `<style>.lf-r4vbpi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 4.5H5.5v16.75H2.75zm15.75 0h2.75v16.75H18.5zm-13 3h13m-13 4h13m-13 4h13M5.5 19h13m-13 0l13-11.5");
}
</style><path class="lf-r4vbpi"/>`,
		"fallback": "iconoven:farm-gate-sharp",
	});
}

export default Component;
