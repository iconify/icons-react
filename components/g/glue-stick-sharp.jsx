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
		"content": `<style>.zrj1xxbdk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 9.25V6a3 3 0 0 1 6 0v3.25Zm-2 0h10v12H7zm0 8h10");
}
</style><path class="zrj1xxbdk"/>`,
		"fallback": "iconoven:glue-stick-sharp",
	});
}

export default Component;
