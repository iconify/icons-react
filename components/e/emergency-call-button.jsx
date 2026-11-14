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
		"content": `<style>.cienipu6n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 15.5h18v4H3Zm2 0V12a7 7 0 0 1 14 0v3.5m-7-7.75v5m-2.5-2.5h5");
}
</style><path class="cienipu6n"/>`,
		"fallback": "uix-sharp:emergency-call-button",
	});
}

export default Component;
