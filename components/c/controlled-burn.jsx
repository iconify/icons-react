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
		"content": `<style>.xro5j6blv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5c4 3.75 6 7 6 10.25a6 6 0 0 1-12 0C6 10 7.25 8 9 6.5c.25 2 1 3.25 2 3.75C10.75 7.5 11 5 12 2.5Zm-9.5 19H5m3 0h8m3 0h2.5");
}
</style><path class="xro5j6blv"/>`,
		"fallback": "uix-sharp:controlled-burn",
	});
}

export default Component;
