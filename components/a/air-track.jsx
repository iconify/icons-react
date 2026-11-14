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
		"content": `<style>.c8tpdcbfc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 8.25h8.5V13H3ZM2.5 16h19m-7-5.25H21M18.25 8L21 10.75l-2.75 2.75");
}
</style><path class="c8tpdcbfc"/>`,
		"fallback": "uix-sharp:air-track",
	});
}

export default Component;
