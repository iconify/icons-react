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
		"content": `<style>.ngilovbkg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 2.75h16.5v3.5H3.75zM12 6.25v3L15 11l-6 3.5l6 3.5l-3 1.75");
}
</style><path class="ngilovbkg"/>`,
		"fallback": "iconoven:corkscrew-sharp",
	});
}

export default Component;
