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
		"content": `<style>.b4a1b6bah {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 4.75h16.5v14.5H2.75V4.75zm1.5 3v6.5m2.25-6.5v6.5m2.5-6.5v6.5m2.25-6.5v6.5m2.25-6.5v6.5m2.25-6.5v6.5m-9.25 2.5h7");
}
</style><path class="b4a1b6bah"/>`,
		"fallback": "iconoven:barcode-label-sharp",
	});
}

export default Component;
