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
		"content": `<style>.p4jk89bkt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 12.25h18.5v9H2.75zm6.75 4.5h5M5.5 10V2.75h4.75l1.5 1.75h6.75V10");
}
</style><path class="p4jk89bkt"/>`,
		"fallback": "iconoven:file-cabinet-open-sharp",
	});
}

export default Component;
