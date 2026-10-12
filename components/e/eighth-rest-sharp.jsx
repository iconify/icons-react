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
		"content": `<style>.lbsprjb6h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m10.25 2.75l4 4.75l-3.5 4l4 4.5m0 0c-2.5-1-5.5-.25-5 2.25l.317 1.713l1.683 1.287");
}
</style><path class="lbsprjb6h"/>`,
		"fallback": "iconoven:eighth-rest-sharp",
	});
}

export default Component;
