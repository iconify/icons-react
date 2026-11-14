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
		"content": `<style>.cb1t167ha {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4h19v10h-3a6.5 6.5 0 0 0-13 0h-3Zm0 14.5q2.25-2 4.5 0t4.5 0t4.5 0t4.5 0");
}
</style><path class="cb1t167ha"/>`,
		"fallback": "uix-sharp:bridge-arch",
	});
}

export default Component;
