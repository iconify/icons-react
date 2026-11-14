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
		"content": `<style>.jpw998bcw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3c2.5 0 7 12 7 15.5c0 2-3 2.5-7 2.5s-7-.5-7-2.5C5 15 9.5 3 12 3ZM7.5 9.75h9m-11 5.75h13");
}
</style><path class="jpw998bcw"/>`,
		"fallback": "uix-sharp:candy-corn",
	});
}

export default Component;
