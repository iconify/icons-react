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
		"content": `<style>.skt4hqb9f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 4h10l4.5 16h-19Zm3.25 0l-1.5 16m5-16l1.5 16m-11-6h5m.5-5h4.5m.25 3h4.75");
}
</style><path class="skt4hqb9f"/>`,
		"fallback": "uix-sharp:hardwood-floor",
	});
}

export default Component;
