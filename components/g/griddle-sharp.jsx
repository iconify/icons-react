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
		"content": `<style>.jsek93b9u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 11.5h5v3h-5zm8 0h5v3h-5zm-9 3h15v4h-15zm0 2H2.75m16.75 0h1.75");
}
</style><path class="jsek93b9u"/>`,
		"fallback": "iconoven:griddle-sharp",
	});
}

export default Component;
