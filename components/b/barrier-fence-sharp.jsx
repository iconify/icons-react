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
		"content": `<style>.w4sh5mbsb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 5.5h18.5V12H2.75zM7 12l4-6.5m2 6.5l4-6.5M6 12v8.5M18 12v8.5m-14.75 0h5.5m6.5 0h5.5");
}
</style><path class="w4sh5mbsb"/>`,
		"fallback": "iconoven:barrier-fence-sharp",
	});
}

export default Component;
