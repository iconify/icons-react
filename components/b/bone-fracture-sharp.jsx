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
		"content": `<style>.a30k8pb4y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 10.75H7.62A2.25 2.25 0 1 0 4.47 12a2.25 2.25 0 1 0 3.15 1.25h2.88l-1-1l1.25-.75Zm4 2.5h2.38A2.25 2.25 0 1 0 19.53 12a2.25 2.25 0 1 0-3.15-1.25H13.5l1 1l-1.25.75ZM12 6.5v2m0 7v2");
}
</style><path class="a30k8pb4y"/>`,
		"fallback": "iconoven:bone-fracture-sharp",
	});
}

export default Component;
