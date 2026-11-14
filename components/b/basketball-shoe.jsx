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
		"content": `<style>.enj8x0y_r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 2.5h6l.75 7c3.75.5 8.25 2.5 9.5 6c.5 1.5.75 3.5-.25 5h-17zM3.75 17h17.5M12 13.75h3");
}
</style><path class="enj8x0y_r"/>`,
		"fallback": "uix-sharp:basketball-shoe",
	});
}

export default Component;
