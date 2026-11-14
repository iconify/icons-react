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
		"content": `<style>.g-gjmzbna {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.25 4.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM10 8v6h5l3 6.5m-4.568-3.219a4.5 4.5 0 1 1-5.971-5.01M10 10.5h4");
}
</style><path class="g-gjmzbna"/>`,
		"fallback": "uix-sharp:health-disability-cover",
	});
}

export default Component;
