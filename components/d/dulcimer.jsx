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
		"content": `<style>.gebuw1hsg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 19.5h18L17 5H7ZM9 3v16.5M12 3v16.5M15 3v16.5");
}
</style><path class="gebuw1hsg"/>`,
		"fallback": "uix-sharp:dulcimer",
	});
}

export default Component;
