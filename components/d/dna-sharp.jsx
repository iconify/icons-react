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
		"content": `<style>.vqrvoxbtn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 2.75C7 7.25 17 7.5 17 12S7 16.75 7 21.25m10-18.5C17 7.25 7 7.5 7 12s10 4.75 10 9.25M9.75 4.5h4.5m-5 7.5h5.5m-5 7.5h4.5");
}
</style><path class="vqrvoxbtn"/>`,
		"fallback": "iconoven:dna-sharp",
	});
}

export default Component;
