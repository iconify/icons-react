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
		"content": `<style>.pgt4oynkt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9.25 7.75l-.5-5m6 5l.5-5m-5.5 5h5.5l-.18.98l-.39 2.04l-.18.98l.45.89l3.85 7.72l.45.89H4.75l.45-.89l3.85-7.72l.45-.89l-.18-.98l-.39-2.04l-.18-.98zM9.5 12h5");
}
</style><path class="pgt4oynkt"/>`,
		"fallback": "iconoven:dress-sharp",
	});
}

export default Component;
