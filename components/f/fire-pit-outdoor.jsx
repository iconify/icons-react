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
		"content": `<style>.zvsjsbc6l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 16.5h18V21H3Zm9-14q4 3.5 3.5 6Q15 10 12 10T8.5 8.5Q8 6 12 2.5Zm-6 14L18 13M6 13l12 3.5");
}
</style><path class="zvsjsbc6l"/>`,
		"fallback": "uix-sharp:fire-pit-outdoor",
	});
}

export default Component;
