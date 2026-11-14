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
		"content": `<style>.aaezp2dks {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4.5v15m0-9h16a2 2 0 0 1 2 2v7m-18-4h18m-15.25-9h5.5v4h-5.5Zm8.25 4l3 5");
}
</style><path class="aaezp2dks"/>`,
		"fallback": "uix-sharp:bed-making",
	});
}

export default Component;
