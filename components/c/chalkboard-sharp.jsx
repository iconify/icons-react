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
		"content": `<style>.f9s4pi-_g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 3.25h18.5v13H2.75zm4 4.5h7.5m-7.5 4h4.5m-4 4.5l-1.5 5m11-5l1.5 5");
}
</style><path class="f9s4pi-_g"/>`,
		"fallback": "iconoven:chalkboard-sharp",
	});
}

export default Component;
