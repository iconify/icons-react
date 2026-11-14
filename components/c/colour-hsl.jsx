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
		"content": `<style>.guk-icbfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2 12a6.25 6.25 0 1 0 12.5 0A6.25 6.25 0 1 0 2 12Zm6.25-6.25v12.5M2 12h12.5m5-8v16m-2-10a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}
</style><path class="guk-icbfd"/>`,
		"fallback": "uix-sharp:colour-hsl",
	});
}

export default Component;
