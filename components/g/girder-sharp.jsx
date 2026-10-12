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
		"content": `<style>.jw0x38brl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 5.75h18.5v2.5H2.75zm0 10h18.5v2.5H2.75zm1 0l3.75-7.5l4.5 7.5l4.5-7.5l3.75 7.5");
}
</style><path class="jw0x38brl"/>`,
		"fallback": "iconoven:girder-sharp",
	});
}

export default Component;
