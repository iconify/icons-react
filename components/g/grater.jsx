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
		"content": `<style>.ccdh0eb9i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 3.5h8l3 17H5ZM10 9h.01M14 9h.01M8.5 14h.01M12 14h.01m3.49 0h.01");
}
</style><path class="ccdh0eb9i"/>`,
		"fallback": "uix-sharp:grater",
	});
}

export default Component;
