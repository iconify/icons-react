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
		"content": `<style>.f5bc8wb1q {
  d: path("M3 5h18v14H3Zm0 4.5h18");
}

.i4xbiwb9i {
  d: path("M10.5 5v7.5h3V5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="f5bc8wb1q"/><path class="i4xbiwb9i"/></g>`,
		"fallback": "uix-sharp:food-parcel",
	});
}

export default Component;
