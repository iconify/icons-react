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
		"content": `<style>.wh1ekti5c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 10H14v11.5H2.5ZM14 6a4 4 0 0 1 4 4m-4-7.5a7.5 7.5 0 0 1 7.5 7.5");
}
</style><path class="wh1ekti5c"/>`,
		"fallback": "uix-sharp:device-connected",
	});
}

export default Component;
