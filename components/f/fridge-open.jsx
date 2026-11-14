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
		"content": `<style>.xm966cc_z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.5h10.5v19H3Zm10.5 0l7 2v15l-7 2ZM3 9h10.5M3 15h10.5");
}
</style><path class="xm966cc_z"/>`,
		"fallback": "uix-sharp:fridge-open",
	});
}

export default Component;
