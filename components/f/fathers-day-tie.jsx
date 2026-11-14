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
		"content": `<style>.k9t-udbqy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 2.5h6l-1 4h-4Zm1.5 4L7 17l5 4.5l5-4.5l-3.5-10.5");
}
</style><path class="k9t-udbqy"/>`,
		"fallback": "uix-sharp:fathers-day-tie",
	});
}

export default Component;
