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
		"content": `<style>.g3ibk5adk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3.5h17v12h-17Zm4.5 12V21m8-5.5V21M9.5 6.75v5.5m5-5.5v5.5m-5-2.75h5");
}
</style><path class="g3ibk5adk"/>`,
		"fallback": "uix-sharp:hotel-sign",
	});
}

export default Component;
