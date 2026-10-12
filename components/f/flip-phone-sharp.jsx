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
		"content": `<style>.pgo9j_opj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 2.75h11.5v8H6.25zm3 4h5.5m-8.5 6.5h11.5v8H6.25zm3 3h5.5m-5.5 2.5h5.5");
}
</style><path class="pgo9j_opj"/>`,
		"fallback": "iconoven:flip-phone-sharp",
	});
}

export default Component;
