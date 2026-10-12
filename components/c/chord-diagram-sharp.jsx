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
		"content": `<style>.htvdreohc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.16 3.31a9.25 9.25 0 0 1 5.95 10.3m-18.22 0a9.25 9.25 0 0 1 5.95-10.3m9.11 15.78a9.25 9.25 0 0 1-11.9 0m12.53-9.48Q12 12 15.5 18.06m-7 0Q12 12 5 12m3.5-6.06q3.5 6.06 7 0");
}
</style><path class="htvdreohc"/>`,
		"fallback": "iconoven:chord-diagram-sharp",
	});
}

export default Component;
