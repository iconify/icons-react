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
		"content": `<style>.a5x27qbuo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.855 8.875a8.25 8.25 0 1 1 0 8.25M12 2.75V11");
}
</style><path class="a5x27qbuo"/>`,
		"fallback": "uix-sharp:appliance-on",
	});
}

export default Component;
