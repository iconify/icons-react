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
		"content": `<style>.g3xgwkick {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M18.5 9h-13a2.5 4.5 0 0 0 0 9h13a2.5 4.5 0 0 0 0-9a2.5 4.5 0 0 0 0 9m-11-9q4.5-7 9 0");
}
</style><path class="g3xgwkick"/>`,
		"fallback": "uix-sharp:art-tube-carrier",
	});
}

export default Component;
