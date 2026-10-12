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
		"content": `<style>.a9a4w5b8i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 2.75h12v5H6zm3.5 5h5v13.5h-5zm.75-5v5m3.5-5v5m-4.25 4.5l5-1.25m-5 4.75l5-1.25m-5 4.75l5-1.25");
}
</style><path class="a9a4w5b8i"/>`,
		"fallback": "iconoven:bolt-sharp",
	});
}

export default Component;
